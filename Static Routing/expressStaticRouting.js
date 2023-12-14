const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express()

app.use(express.static("./public"))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})  

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/about.html"))
})

app.all("*",(req,res)=>{
    res.send("Page Not Found")
})

app.listen(4001,()=>{
    console.log("Server started")
})
