
const mongoose=require("mongoose")

const menSchema=new mongoose.Schema({
name:{
type:String,
require:true,
    
},

quantity:{
type:String,
require:true,

},

amount:{
type:String,
require:true,
},


})

const MyProduct=new mongoose.model("MyProduct", menSchema)
module.exports=MyProduct;