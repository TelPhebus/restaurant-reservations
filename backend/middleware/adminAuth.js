import jwt from 'jsonwebtoken'

// Middleware to verify if the request is made by an authorized admin
const adminAuth = async (req, res, next) =>{
    try {
         // Get the token from request headers
        const {token} = req.headers
     if (!token) {   //  <------------ If token is missing, return unauthorized response
            return res.status(401).json({ success: false, message: "Unauthorized user" });
        }

        // Verify the token using the JWT secret
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded email matches the admin's email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "User is not authorized" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default adminAuth