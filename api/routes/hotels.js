import express from "express";
import Hotel from "../models/Hotel.js";


const router =express.Router();

//Create
router.post("/", async (req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }

})

//update

router.put("/:id", async (req,res)=>{
    try{
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}
            ,{new:true})
        res.status(200).json(updatedHotel);

    }catch(err){
        res.status(500).json(err);
    }

})

//Delete

router.delete("/:id", async (req,res)=>{
    try{
        const deleteHotel= await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");

    }catch(err){
        res.status(500).json(err);
    }

})

//get
router.get("/:id", async (req,res)=>{
    try{
        const viewHotel= await Hotel.findById(req.params.id);
        res.status(200).json(viewHotel);

    }catch(err){
        res.status(500).json(err);
    }

})

// Get all hotels
router.get("/", async (req,res)=>{
    try{
        const Hotels= await Hotel.find();
        res.status(200).json(Hotels);

    }catch(err){
        res.status(500).json(err);
    }

})







export default router    