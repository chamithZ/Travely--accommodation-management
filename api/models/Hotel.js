import mongoose from 'mongoose';

const HotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true 
    },
    city:{
        type:String,
        reqiured:true
    },
    address:{
        type:String,
        reqiured:true
    },
    distance:{
        type:String,
        reqiured:true
    },
    contactName:{
        type:String,
        reqiured:true
    },
    contactNo:{
        type:Number,
        reqiured:true
    },
    numberOfRoomTypes:{
        type:Number,
        reqiured:true
    },
    photos:{
        type: [String],
    },
    certificates:{
        type: [String],
    },
    description:{
        type:String,
        reqiured:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    cheapestPrice:{
        type:Number,
        reqiured:true 
    },
    sustainability:{
        type: Boolean,
        default: false,
    },
    availableWork:{
        type: Boolean,
        default: false,
    },
    featured:{
        type: Boolean,
        default: false,
    },
   
}) 

export default mongoose.model("Hotel",HotelSchema) 