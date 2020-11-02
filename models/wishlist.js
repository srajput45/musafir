const fs = require("fs");
const { join } = require("path");
const path = require("path");

class WishList{
    constructor(prod){
        this.name = prod.place;
    }

    store(){
        this.id = Math.random().toString();
        const filePath = path.join(__dirname,"../data", "wishlist.json");

        fs.readFile(filePath,(err, data) =>{
            let wishlist = [];
            if(!err){
                wishlist = JSON.parse(data);
            }
            wishlist.push(this);
            fs.writeFile(filePath, JSON.stringify(wishlist), (err) =>{
                console.log("ERROR : "+ err);
            });
        });
    }
}

module.exports = WishList;