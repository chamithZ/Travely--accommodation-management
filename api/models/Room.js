import mongoose from 'mongoose';

const RoomSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true 
    },
    description:{
        type:String,
        reqiured:true
    },
    maxPeople:{
        type:String,
        reqiured:true
    },
    roomNumbers: [{nummber : Number, unavailableDates :{type: [Date]}}],
    contactName:{
        type:String,
        reqiured:true
    },
   
   
   
}) 

export default mongoose.model("Room",RoomSchema) 