var express = require("express")
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors())
var bodyparser =require("body-parser")
app.use(bodyparser.json())


// var products= JSON.parse(fs.readFileSync("products.txt").toString())
// console.log(products)

app.get("/Products",(req,res)=>{
    var products= JSON.parse(fs.readFileSync("products.txt").toString())
    console.log(products)
    res.json(products)
})

app.get("/Products/:id",(req,res)=>{
    var products= JSON.parse(fs.readFileSync("products.txt").toString())
    // console.log(products)
    console.log(req.params.id)
    var idproduct=products.find((a,i)=>{
        if(req.params.id==a.id){
            return true
        }
        else{
            return false
        }
    })
  res.json(idproduct)

})

app.delete("/delete/:id",(req,res)=>{
   var products = JSON.parse(fs.readFileSync("products.txt").toString())
   products.splice(req.params.id,1)
   fs.writeFileSync("products.txt",JSON.stringify(products))
})

app.post("/add",(req,res)=>{
    var products = JSON.parse(fs.readFileSync("products.txt").toString())
    products.push(req.body)
    fs.writeFileSync("products.txt",JSON.stringify(products))

})



app.listen(4500);