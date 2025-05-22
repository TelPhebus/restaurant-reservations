import mongoose from "mongoose";

// Define the schema for a reservation
const reservationSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    date: {type:String, required:true},
    time: {type:String, required:true},
    guests:{type:String, required:true},
})

export default mongoose.model("Reservation", reservationSchema)