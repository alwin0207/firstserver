var express = require("express");
var app = express();
app.use(express.static('images'));
app.use(express.static("stylesheets"));

app.get("/",function(req, res){
    res.send("<h1>welcome to this page, i'm an imitator mehehehehe</h1>");
});

app.get("/home", function(req, res){
    res.render("home.ejs");
});

app.get("/buy/:product/:color",function(req, res){
    var product = req.params.product;
    var color = req.params.color;
    console.log("product is "+product);
    console.log("color is "+color);
    res.render("buy.ejs",{product:product, color:color});
})

app.listen(3000, function(){
    console.log("server is listening");
});