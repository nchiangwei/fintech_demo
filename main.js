const product = require("./product");
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");


server = express();
server.use(cors());
//server.use(body_parser.json());
// ^ either this body_parser or express.json is ok
server.use(express.json());


//product.get_all_products();
// product.get_product_by_id(3);

// product.create_new_product("ipad","1000")
//  product.get_all_products();

//product.delete_product_by_id(9);
// product.update_price_by_id(10,1500);

// router = express.Router();

// router.get("/Welcome",(request,response)=>{
//     response.status(403).send("Welcome to Devkit#2");
// });

// server.use(router);

server.use(product.router);

server.listen(3000,()=>{
    console.log("Server is running!");
});

//test