import express from 'express'
import cors from "cors"
import 'dotenv/config'
import { connectDB } from './config/db.js';
import connectCloudinary from './config/cloudinary.js';

//Here we import the route handlers ---->
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js'
import productRouter from './routes/productRoute.js';
import reservationRoute from './routes/reservationRoute.js'

const app = express()

const port = process.env.PORT|| 4000

// Middleware for Cross-Origin Resource Sharing
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json())

// This Connect to MongoDB
connectDB()
//This  Connect to Cloudinary for image uploads
connectCloudinary()


// Define API routes 
app.use("/api/user", userRouter);

app.use("/api/admin", adminRouter); 
app.use("/api/product", productRouter)
app.use("/api/reservations", reservationRoute);

// Test route to confirm server is running
app.get('/', (req,res)=>{
    res.send("API Working")
})

// Here is how to start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

