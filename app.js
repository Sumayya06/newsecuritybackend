const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const securityrouter=require("./controllers/securityrouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://sumayyasalam06:Sumayyasalam06@cluster0.r19czfd.mongodb.net/securityDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/security",securityrouter)
app.listen(3001,()=>{
    console.log("server running")
})
 
