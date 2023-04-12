import Hotel from "../models/Hotel.js"


export const createHotel =async (req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
       next(err)
    }
}

export const updateHotel =async (req,res,next)=>{
    try{
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}
            ,{new:true})
        res.status(200).json(updatedHotel);

    }catch(err){
        next(err);
    }
}

export const deleteHotel =async (req,res,next)=>{
    try{
        const deleteHotel= await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");

    }catch(err){
        res.status(500).json(err);
    }
}

export const getHotel =async (req,res,next)=>{
    try{
        const viewHotel= await Hotel.findById(req.params.id);
        res.status(200).json(viewHotel);

    }catch(err){
        next(err);
    }
}

export const getAllHotel =async (req,res,next)=>{
    try{
        const Hotels= await Hotel.find();
        res.status(200).json(Hotels);

    }catch(err){
        res.status(500).json(err);
    }
}

export const countByCity =async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city})
        }))

        res.status(200).json(list);

    }catch(err){
        res.status(500).json(err);
    }
}

export const countByType =async (req,res,next)=>{
    
    try{

    const hotelCount  =await Hotel.countDocuments({type:"Hotel"})
    const apratmentCount =await Hotel.countDocuments({type:"apartment"})
    const resortCount  =await Hotel.countDocuments({type:"resort"})
    const villaCount  =await Hotel.countDocuments({type:"villa"})
    const cabinCount  =await Hotel.countDocuments({type:"cabin"})
   
        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"apartment", count:apratmentCount},
            {type:"resort", count:resortCount},
            {type:"villa", count:villaCount},
            {type:"cabin", count:cabinCount},
        ]);

    }catch(err){
        res.status(500).json(err);
    }
}



