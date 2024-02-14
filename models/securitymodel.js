const mongoose=require("mongoose")
const securityschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:String,
    phone:String,
    emailid:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("security",securityschema)