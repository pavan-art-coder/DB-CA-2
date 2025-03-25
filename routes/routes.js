const express=require("express")
const mongoose=require("mongoose")
const Schema=require("../model/restaurnat")

const router=express.Router()

router.get("/",(req,res)=>{
    res.send("API is Working")
})

router.post('/add',async(req,res)=>{
    try{
         const {name,location,cuisine,rating,menu}=req.body
         if(!name || !location || !cuisine || !rating ||!menu){
            return (res.status(400).json({message:"Enter Valid Details"}))
         }

         const AR=await Schema.create({
            name,
            location,
            cuisine,
            rating,
            menu,

         })
         if(AR){
            res.status(200).json({message:'New Restaurnt Added Successfully',Res:AR})
        }
        else{
            res.status(500).json({message:"Not Added "})
        }
    }
    catch(error){
        res.send(500).json({error:"Something Went Wrong"})
    }
})

router.get('/get',async(req,res)=>{
    try{
         const G=await Schema.find()
         if(G){
            res.status(200).json({message:' Restaurnt Found  Successfully',GRE:G})
        }
        else{
            res.status(500).json({message:"Not Found "})
        }
    }
    catch(error){
        res.send(500).json({error:"Something Went Wrong"})
    }
})

router.get('/get/:id',async(req,res)=>{
    try{
         const {id}=req.params

         if(!mongoose.Types.ObjectID.isValid(id)){
            return (res.status(404).json({message:"Restaurnt Not Found"}))
         }

         const GR=await Schema.findById(id)
         if(GR){
            res.status(200).json({message:' Restaurnt Found  Successfully',GER:GR})
        }
        else{
            res.status(500).json({message:"Not Found "})
        }
    }
    catch(error){
        res.send(500).json({error:"Something Went Wrong"})
    }
})

router.put('/update/:id',async(req,res)=>{
    try{
         const {id}=req.params
         if(!mongoose.Types.ObjectID.isValid(id)){
            return (res.status(404).json({message:"Restaurnt Not Found"}))
         }
         const {name,location,cuisine,rating,menu}=req.body
         const UR=await Schema.findByIdAndUpdate(id,{name,location,cuisine,rating,menu},{new:true,runValidators:true})
         if(UR){
            res.status(200).json({message:' Restaurnt Updated Successfully',UER:UR})
        }
        else{
            res.status(500).json({message:"Not Updated "})
        }
    }
    catch(error){
        res.send(500).json({error:"Something Went Wrong"})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
         const {id}=req.params
         if(!mongoose.Types.ObjectID.isValid(id)){
            return (res.status(404).json({message:"Restaurnt Not Found"}))
         }
         const DR=await Schema.findByIdAndDelete(id)
         if(DR){
            res.status(200).json({message:' Restaurnt Deleted Successfully',DER:DR})
        }
        else{
            res.status(500).json({message:"Not Deleted "})
        }
    }
    catch(error){
        res.send(500).json({error:"Something Went Wrong"})
    }
})




module.exports=router