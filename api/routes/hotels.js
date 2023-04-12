import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel,countByCity } from "../controllers/hotel.js";


const router =express.Router();
// hotel create update must be allow only for hotel owners 1.12 in  yt vd
//Create
router.post("/",createHotel)

//update

router.put("/:id",updateHotel)

//Delete

router.delete("/:id",deleteHotel)

//get
router.get("/find/:id", getHotel)

// Get all hotels
router.get("/",getAllHotel)

router.get("/countByCity",countByCity)


export default router    