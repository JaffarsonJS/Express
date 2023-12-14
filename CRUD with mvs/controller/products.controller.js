// const products  = require('../controller/products.controller');
const products  = require('../model/product.model');

//* Add Products
let addProducts = (req,res)=>{
    let {pid,pname} = req.body
    products.push({pid,pname})
    res.send("Products Added Successfully")
}

//* Update Products
let getProducts = (req,res)=>{
    res.json({
        error:false,message:"Products Fetch successfully",products
    })
}

//* Get Single Product
let getSingleProduct=(req,res)=>{
    let {id} = req.params
    
    let singleProduct = products.find(({pid})=>{
        return pid === Number(id)
    })

    if(!singleProduct){
        return res.json({
        error:true,message:`No products found with given id ${id}`
        })
    }

    res.json({
        error:false,message:"Products Fetch successfully",products:singleProduct
    })
}

//* Update Product

let updateProduct=(req,res)=>{
    let {id} = req.params
    let {pname:productName} = req.body
    
    let singleProduct = products.find(({pid})=>{
        return pid === Number(id)
    })

    if(!singleProduct){
        return res.json({
        error:true,message:`No products found with given id ${id}`
        })
    }

    let updateProducts = products.map(p=>{
        if(p.pname===singleProduct.pname){
            p.pname=productName
        }
        return p
    })

    productName=updateProducts

    res.json({
        error:false,message:"Products Fetch successfully",updateProducts:products
    })
}


//* Delete Products
let deleteProduct = (req,res)=>{
    let {id} = req.params
    
    let singleProduct = products.find(({pid})=>{
        return pid === Number(id)
    })

    if(!singleProduct){
        return res.json({
        error:true,message:`No products found with given id ${id}`
        })
    }

    let filteredProducts = products.filter(p=>{
        return p.pid == Number(id)
    })

    products = filteredProducts;

    res.json({
        error:false,message:"Products Deleted successfully",updateProducts:products
    })
}

module.exports={
    addProducts,getProducts,getSingleProduct,updateProduct,deleteProduct
}