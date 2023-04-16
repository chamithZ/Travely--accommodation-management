import Hotel from "../models/Hotel.js"
import multer from "multer";
import path from "path";




//img upload
export const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images")
    },
    filename : (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname) );
    }
});

export const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only image files are allowed!'));
      }
      cb(null, true);
    }
  }).fields([
    { name: 'HotelImg', maxCount: 1 },
    { name: 'HotelImgs', maxCount: 5 },
    { name: 'certificates', maxCount: 5}
  ]);

  
  export const createHotel = async (req, res) => {
    try {
      // Use Multer middleware to handle file upload
      upload(req, res, async (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Error uploading images" });
        }
  
        // Extract the file names from the request object
        const hotelImg = req.files.HotelImg[0].filename;
        const certificates = req.files.certificates.map((file) => file.filename);
        const hotelImgs = req.files.HotelImgs.map((file) => file.filename);
  
        // Create a new hotel object from the request body and file names
        const newHotel = new Hotel({
          ...req.body,
          HotelImg: hotelImg,
          certificates: certificates,
          HotelImgs: hotelImgs,
        });
  
        // Save the new hotel to the database
        await newHotel.save();
  
        // Send a response with the new hotel object
        res.status(200).json(newHotel);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }; 
  
  
  
  


export const updateHotel =async (req,res,next)=>{
    try{
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}
            ,{new:true})
        req.status(200).json(updatedHotel);

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

export const getAllHotel = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        isApproved: true,
        cheapestPrice: { $gt: min | 1, $lt: max || 100000 }
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
  };

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



