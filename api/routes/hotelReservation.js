import express from "express";
import Hotel from "../models/HotelReservation.js";
import {reservation} from "../controllers/hotelReservation.js";


const router =express.Router();
router.post("/reserveroom",reservation)

export default router    