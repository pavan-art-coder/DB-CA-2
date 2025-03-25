const mongoose=require("mongoose")

const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
})




const RestaurnatSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    cuisine:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,

    },
    menu:[MenuSchema]
})

const Schema=mongoose.model("Restaurnt",RestaurnatSchema)
module.exports=Schema