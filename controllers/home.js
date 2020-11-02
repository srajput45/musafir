const Product = require("../models/home");
const Wishlist = require("../models/wishlist");
exports.homePage = (req,res,next )=>{
    res.render("homePage", {
        title : "Musafir",
    });
}

exports.signinPage = (req, res) =>{
    const product = new Product(req.body);
    product.store();
    res.redirect("/home")
}


exports.wishlistPage = (req, res) =>{
    const wishlist = new Wishlist(req.body);
    wishlist.store();
    res.redirect("/home")
}
