const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rahul:kumar@cluster0.ukhhb1i.mongodb.net/mb?retryWrites=true&w=majority",{

useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("connect")
}).catch(()=>{
    console.log(" not connect")
})