const express = require('express')
const productRoutes = require('./routes/products.routes');


const app = express()

app.use(express.json())
app.use("/api/products", productRoutes)

app.listen(4000,()=>{
    console.log("Server Running")
})
