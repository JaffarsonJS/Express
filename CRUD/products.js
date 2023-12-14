const express = require('express');
let products=[];
let app = express();

app.use(express.json())

//* Add Products
app.post("/api/addproduct",(req,res)=>{
    // console.log(req.body.Products)
    let newproducts = req.body.Products;
    newproducts.map((product)=>{
        const {id,pname}=product;

        products.push({id,pname})
})
    res.send("Products Added Successfully")
    // console.log(products)
    
})



//* Get Products
app.get("/api/getproduct",(req,res)=>{
    console.log(products)
    res.json({error:false, message:"Products Fetched Successfully",products})
})

// //* Update Products
app.put("/api/updateproduct/:id",(req,res)=>{
    let {id} = req.params
    let {pname:productName} = req.body

    let singleproduct = products.find(({pid})=>{
        return pid===Number(id)
    })

    if(!singleproduct){
        return res.json({error:true,message:`No product found with given id ${id}`})
    }

    let updateProducts = products.map(p=>{
        if(p.pname===singleproduct.pname){
            p.pname=productName
        }
        return p 
    })

    products = updateProducts

    res.json({error:false,message:"Products Updated Successfully",updateProducts:products})


})

// //* Delete Products
// app.put("/api/deleteproduct/:id",(req,res)=>{
//     let {id} = req.params

//     let singleproduct = products.find(({pid})=>{
//         return pid===Number(id)
//     })

//     if(!singleproduct){
//         return res.json({error:true,message:`No product found with given id ${id}`})
//     }

//     let filterproducts = products.filter(p=>{
//         return p.pid!==Number(id)
//     })
//     products = filterproducts;

//     res.json({error:false,message:"Products Deleted Successfully",updateProducts:products})

    
// })


app.listen(4000,()=>{
    console.log("Server Running")
})