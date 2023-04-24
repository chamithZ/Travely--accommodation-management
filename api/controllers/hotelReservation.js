import { createError } from "../utils/error.js";
import HotelReservation from "../models/HotelReservation.js";

export const reservation=async (req, res, next) => {

    const {
        room, 
        userId,
        checkinDate,
        checkoutDate,
        totalAmount,
        totalDays,
    }= req.body

    try{
        const newReservation = new HotelReservation({
            room: room.name,
            roomID: room._id,
            hotelID: room.hotelID,
            userId,
            checkinDate,
            checkoutDate,
            totalAmount,
            totalDays,
            transactionId: "123456789",
        });
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation);
    }
    catch(err){
        next(err)
    }
};




