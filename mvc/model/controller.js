const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express()

app.use(express.static("../view"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/index.html"))
})
app.get("/products",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/products.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/login.html"))
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/signup.html"))
})


app.listen(4000,()=>{
    console.log("Server Runnin")
})