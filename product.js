//const e = require("cors");
const database = require("./database");
const express = require("express");


router = express.Router();



//use API method
router.get("/products/all",(request,response)=>{
    database.connection.query(`select * from products`, (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occurred at the Backend.");
        } else {
          //console.log(result);
          response.status(200).send(result);
        }
      });
});

// non postman server
// function get_all_products() {
//     database.connection.query(`select * from products`, (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result);
//       }
//     });
//   }

//router get id
router.get("/products/by-id",(request,response)=>{
    database.connection.query(`select*from products where id = ${request.query.id}`,
      (error,result)=>{
          if(error){
              console.log(error);
              response.status(500).send("Some error occurred at the Backend.");
          }else{
              response.status(200).send(result);
          }
      });
});

// non postman server
  function get_product_by_id(id){
      //id = 5
      // select * from products where id = 5;
      database.connection.query(`select*from products where id = ${id}`,
      (error,result)=>{
          if(error){
              console.log(error);
          }else{
              console.log(result);
          }
      });
  }
//router update new product
  router.post("/products/add",(request,response)=>{
    database.connection.query(`insert into products(name,market_price)values('${request.body.name}','${request.body.price}')`,
    (error,result)=>{
        if(error){
            console.log(error);
            response.status(500).send("Some error occurred at the Backend.");
        }else{
            response.status(200).send("New product created successfully!");
        }
    });
  })
  
  //function cr8 new product
  function create_new_product(name,price){
      database.connection.query(`insert into products(name,market_price)values('${name}','${price}')`,
      (error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
        }
    );
  }
  
  //router update price
  router.put("/products/update/by-id",(request,response)=>{
    database.connection.query(
     `update products set name= '${request.body.new_name}', market_price ='${request.body.new_price}' where id = ${request.body.id}`,
    (error,result)=>{
        if(error){
            console.log(error);
            response.status(500).send("Some error occurred at the Backend.");
        }else{
            response.status(200).send("Updated successfully!");
        }
    }
    );
  })
  


  //function update price
  function update_price_by_id(id,new_price){

    database.connection.query(`update products set market_price = ${new_price} where id = ${id}`,
    (error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Product price updated successfully!");
        }
    }
    );
  }
  
  //router delete id
  router.delete("/products/delete/by-id",(request,response)=>{
    database.connection.query(
     `delete from products where id =${request.query.id}`,
    (error,result)=>{
        if(error){
            console.log(error);
            response.status(500).send("Some error occurred at the Backend.");
        }else{
            response.status(200).send("Deleted successfully!");
        }
    }
    );
  })
  
  
  function delete_product_by_id(id){
     database.connection.query(`delete from products where id =  ${id} `,
     (error,result)=>{
         if(error){
             console.log(error);
         }else{
             console.log("Deleted the product successfully!");
         }
     }
     );
  }

  module.exports ={ //all the functions must be included here
      //get_all_products,
    //   get_product_by_id,
    //   create_new_product,
    //   delete_product_by_id,
    //   update_price_by_id,
      router, //remember to export whenever u update anything that requires to go to server database etc

  };