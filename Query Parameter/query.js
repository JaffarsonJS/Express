const express = require('express');

let app = express()

app.get("/",(req,res)=>{
    res.json("Hello")
})

app.get("/api/product",(req,res)=>{
    console.log(req.query)
    res.send("Products")
})

app.listen(4000,()=>{
    console.log("Server Running")
})