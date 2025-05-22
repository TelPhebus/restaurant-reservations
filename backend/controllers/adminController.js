import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js'; 

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
// Get admin credentials from environment variables or default values AND THESE are the info you need to login in the Login Admin Panel
        const adminEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "1234567";

        // Checking if provided credentials match admin credentials

        if (email=== adminEmail && password === adminPassword){
            const token = jwt.sign({role: 'admin', email}, process.env.JWT_SECRET, { expiresIn: '1d' });
             // <-- Responds with success, token, and message
            return res.json({success: true, token, message: "Login successful"});
            
        } else { 
            // Respond with 401 Unauthorized if credentials don't match
            return res.status(401).json({success:false, message: "Invalid Credentials"});
        }
    
    }
    catch (error) {
        // Log server error and respond with 500 Internal Server Error
    console.error('Admin login error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

};
export { adminLogin };
