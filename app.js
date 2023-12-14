const express = require('express');
let app = express()

//! next()
app.get("/",(req,res,next)=>{
    res.send("Jaffarson")
    next()
    console.log("A")
},
(req,res,next)=>{
    next()
    console.log("B")
},(req,res,next)=>{
    next()
    console.log("C")
})


//! Normal navigating
app.get("/about",(req,res,next)=>{
    res.send("About")
})

app.get("/contact",(req,res,next)=>{
    res.send("<h1>contact</h1>")
})

app.listen(4000,()=>{
    console.log("Server running successfully")
})