import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import auth from "./routes/auth.js"
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js"
import tourists from "./routes/tourists.js"
import connect from "./config.js";
import cookieParser from "cookie-parser"


const app =express()
const PORT =process.env.PORT || 8800;
dotenv.config()


//middlewares
app.use(cookieParser)
app.use(express.json())

app.use("/api/auth",auth);
app.use("/api/hotels",hotels);
app.use("/api/rooms",rooms);
app.use("/api/tourists",tourists);


app.listen(PORT, ()=>{
    connect()
    console.log(`connected to backend ${PORT}`)
})