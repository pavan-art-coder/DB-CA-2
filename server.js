const express =require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const router=require("./routes/routes")
const connectDB = require("./config/db")

const URL=process.env.MONGO_URI

const app=express()
app.use(express.json())
app.use("/Rest",router)

app.get('/',(req,res)=>{
    res.send("Hello World")
})
const PORT=5000
app.listen(PORT,async()=>{
    console.log(`Server is Running On The Port ${PORT}`)
    await connectDB(URL)
    
})


