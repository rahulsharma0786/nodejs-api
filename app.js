const express=require("express")
const app=express()
require("./db/conn")
const MyProduct=require("./model/collection")

const port =process.env.PORT || 3000
app.use(express.json())



app.post("/collection",async(req,res)=>{
    try{
        const product=new MyProduct(req.body)
        console.log(req.body)
        const orgpro=await product.save()
        res.status(201).send(orgpro)

    }catch(e){
        res.status(400).send(e)
    }

})

app.get("/",async(req,res)=>{
    try{
        const result=await MyProduct.find({})
        res.send(result)
    }catch(e){
    res.send(e)
    }

})




app.listen(port ,()=>{
console.log("create")

})