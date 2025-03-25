const mongoose=require("mongoose")

const connectDB=async(URL)=>{
    try{

        await mongoose.connect(URL)
        console.log("DATABASE IS CONNECTED")
    }
    catch(error){
         console.log("ERROR IN CONNECTING DATABASE")
    }
}

module.exports=connectDB