import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";


dotenv.config();
dbConnect();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("Hello")
})



app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT} `)
})