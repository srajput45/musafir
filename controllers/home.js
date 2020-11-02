const Product = require("../models/home");
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

