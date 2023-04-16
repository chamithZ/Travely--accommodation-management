import mongoose from 'mongoose';

const hotelReservationSchema=new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    roomID:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    hotelID:{
        type:String,
        required:true 
    },
    checkinDate:{
        type:String,
        reqiured:true
    },
    checkoutDate:{
        type:String,
        reqiured:true
    },
    totalAmount:{
        type:Number,
        reqiured:true
    },
    transactionId:{
        type:String,
        reqiured:true
    },
    totalDays:{
        type:Number,
        reqiured:true
    },
    status:{
        type:String,
        required:true,
        default :"booked"
    }
    
    
   
},{timestamps :true}) 

export default mongoose.model("HotelReservation",hotelReservationSchema)