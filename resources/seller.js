//seller resource for handling addProduct and getProduct methods.
//AddProduct method requires request body in form of productCode, Quantity and price
//GetProduct method returns Product struct for product id passed as query param
//Note: Please update sellerAddress to the address you want to set as seller


var express = require('express');
var Contract = require('./../web3Config');

var router = express.Router();
var sellerAddress = "0xe075246826e254e6e3b3e47a003f925724707396";


router.route('/addProduct')
    .post((req, res) => {
        Contract.methods.addProduct(req.body.productCode, req.body.quantity,req.body.price)
        .send({from: sellerAddress,gas:3000000}, (err, data) => {
             if(err){
                res.status(500).send(err + data);
            }
            else{
                res.status(201).send(data);
            }
        });        
    });

    router.route('/getProduct')
    .get((req, res) => {
        Contract.methods.getProductDetails(req.query.productId).call((err, data) => {
            if(err){
               res.status(500).send(err + data);
           }
           else{
               res.status(201).send(data);
           }
       });        
    });
module.exports = router
