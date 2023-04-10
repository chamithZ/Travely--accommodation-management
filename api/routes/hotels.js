import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";


const router =express.Router();

//Create
router.post("/",createHotel)

//update

router.put("/:id",updateHotel)

//Delete

router.delete("/:id",deleteHotel)

//get
router.get("/:id", getHotel)

// Get all hotels
router.get("/",getAllHotel)







export default router    