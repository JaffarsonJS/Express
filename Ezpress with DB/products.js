const express = require('express');
const mongose = require('mongose');

let app = express()
app.use(express.json())

//* Creating and storing db and connecting to it
mongose.connect("mongodb://127.0.0.1:27017/store")

//* Creating Structure or Schema of Documents
let productSchema = new mongose.Schema(
    {
        pid : {
            type : Number,
            required : true
        },
        pname : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        qty : {
            type : Number,
            required : true
        }
    },
    {timestamps:true}
)

//* Creating Collection
let productsCollection = mongose.model("product",productSchema)

app.post("/api/productts/addproduct",(req,res)=>{
    let {pid, pname, price, qty, color} = req.body
    console.log(req.body)

    let addDocument = productsCollection.create({pid, pname, price, qty, color})
    res.json({data:addDocument})
})


app.listen(4001,()=>{
    console.log("Server Running")
})
