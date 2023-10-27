const { default: mongoose } = require("mongoose")
const mangoose=require("mongoose")


const connectDb=async()=>{
await mongoose.connect(process.env.MONGO_URL)
.then(res=>{
console.log("monodb connected sucessfully")



}).catch(err=> console.log(err))



}
module.exports=connectDb