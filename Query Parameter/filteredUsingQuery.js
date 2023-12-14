const express = require('express');
let products = [
    {pid:1,pname:"mobile"},{pid:2,pname:"laptop"},{pid:3,pname:"pen"},{pid:4,pname:"watch"},{pid:5,pname:"pendrive"},{pid:6,pname:"earphones"},{pid:7,pname:"pencil"},{pid:8,pname:"mobile"}
]

let app = express()

// app.get("/",(req,res)=>{
//     res.send(products)
// })

app.get("/api/product",(req,res)=>{
    let { name,limit }  = req.query
    // console.log(name,limit)

    if(name)
    {
        let filteredProducts = products.filter(({pname})=>{
            return pname===name
        })

        return res.json(filteredProducts)
    }
    return res.json(products)

    if(limit){
        
    }
})

app.listen(4000,()=>{
    console.log("Server Running")
})