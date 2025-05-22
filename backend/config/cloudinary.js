import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv';
dotenv.config();

// it countains the Schema for the protection on the proccess of sending info and key in the web
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY,

    })

}

export default connectCloudinary