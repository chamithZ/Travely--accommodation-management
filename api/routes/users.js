import express from "express";


import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router =express.Router();

// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hello user , you are logged in")
// })

// router.get("/checkuser/:id",verifyUser, (req,res,next) =>{
//     res.send("hello user ,you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin, (req,res,next) =>{
//     res.send("hello Admin, you can delete all account")
// })

//Create
router.post("/",createUser)

//update

router.put("/:id",verifyUser,updateUser)

//Delete

router.delete("/:id",verifyUser,deleteUser)

//get
router.get("/:id",verifyUser, getUser)

// Get all hotels
router.get("/",verifyAdmin,getAllUser)







export default router    