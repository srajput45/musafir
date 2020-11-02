const fs = require("fs");
const { join } = require("path");
const path = require("path");

class Product{
    constructor(prod){
        this.name = prod.name;
        this.password = prod.password;
    }

    store(){
        this.id = Math.random().toString();
        const filePath = path.join(__dirname,"../data", "signin.json");

        fs.readFile(filePath,(err, data) =>{
            let products = [];
            if(!err){
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) =>{
                console.log("ERROR : "+ err);
            });
        });
    }
}

module.exports = Product;