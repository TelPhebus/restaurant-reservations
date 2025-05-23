import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { response } from "express";


console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Login existing user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: "User Doesn't exist"})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

         // Compare entered password with hashed password in DB
        if (!isMatch) {
            return res.json({success: false, message: "Invalid Credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}
  // It creates a JWT token with user ID
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '1d' }) 
}

const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false, message: "User already exists"})
        }

                if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Please enter a valid email"})
        }

        if (password.length<8) {
            return res.json({success:false, message: "Please enter a strong password"})
            
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new userModel({

             //Here it Creates new user document
        name:name,
        email:email,
        password:hashedPassword,

        })
        // Saves the user to DataBase
       const user = await newUser.save()
       const token = createToken(user._id)
       res.json({success:true, token})


    } catch (error) {
        console.log(error);
        res.json({success:false, message: "ERROR"})
        
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");
        res.json({success: true, users});
    } catch (error) {
        res.status(500).json({success:false, message: "Error fetching users"});
    }
}

export {loginUser, registerUser}
