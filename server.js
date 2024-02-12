var express = require('express');
var server = express();
var routes = require('./routes/route');
var mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost:27017/est", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db connected");
    })
    .catch(error => {
        console.log("db not start:", error.message);
    });

server.use(cors());
server.use(bodyParser.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});