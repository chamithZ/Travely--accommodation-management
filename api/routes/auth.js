import express from "express";

const router =express.Router();

router.get("/",(req,res)=>{
    res.send("hello.this is auth endpoiyya")
})
export default router 