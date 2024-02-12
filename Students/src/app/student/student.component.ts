import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  StudentArray : any[] = [];
  currentStudentID = "";
  name: string ="";
  address: string ="";
  phone: string ="";
  
  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }
  getAllStudent() {
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    { 
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
  }
  setUpdate(data: any) 
  {
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
   this.currentStudentID = data._id;
  
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student data Updated successfully")
        this.getAllStudent();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student data Deleted successfully")
        this.getAllStudent();
   
    });
    }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       
  }
register()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone, 
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.name = '';
        this.address = '';
        this.phone  = '';
        this.getAllStudent();
    });
  }
}
