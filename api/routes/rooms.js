import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router =express.Router();
//Create
router.post("/:hotelid",createRoom)

//update

router.put("/:id",verifyAdmin,updateRoom)

//Delete

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

//get
router.get("/:id", getRoom)

// Get all hotels
router.get("/",getAllRoom)


export default router 