import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import auth from "./routes/auth.js"
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js"
import tourists from "./routes/tourists.js"



const app =express()
dotenv.config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to mongodb")
      } catch (error) {
        throw error 
      }
}

mongoose.connection.on("disconnected", ()=>{
  console.log("mongoDB disconnected")
});

//middlewares

app.use(express.json())

app.use("/api/auth",auth);
app.use("/api/hotels",hotels);
app.use("/api/rooms",rooms);
app.use("/api/tourists",tourists);





app.listen(8800, ()=>{
    connect()
    console.log("connected to backend")
})