const userService = require('./userService');

let getDataConntrollerfn = async (req, res) =>
{
    let student = await userService.getDataFromDBService();
    res.send({ "status": true, "data": student });
}

let createUserControllerFn = async (req, res) => 
{
    let status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

let updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    let result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}

let deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     let result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };