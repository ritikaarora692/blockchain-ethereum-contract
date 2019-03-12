//Module for starting server and registering resources.
//Please run this file and use url http://localhost:8081/seller/addProduct
//post method in Postman.


var express = require ('express');
var router = require("./resources/seller");

var app = express();

app.use(express.json());       
app.use(express.urlencoded({
    extended: false
}));
app.use('/seller', router);

var server = app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", 
            server.address().address, server.address().port)
 })