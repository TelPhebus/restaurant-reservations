#  Restaurant Reservation – Backend

This is the **backend** server for the Restaurant Reservation App, built with **Node.js**, **Express**, and **MongoDB**.

##  Features

- JWT Authentication (Login/Register)
- Separate routes for Users and Admins
- Reservation form data saved in MongoDB
- Admin login with protected route
- Cloudinary for image uploads
- Multer middleware for file handling

##  Structure

- `routes/userRoute.js`: Handles user registration/login & reservations
- `routes/adminRoute.js`: Handles admin login and menu operations
- `controllers/userController.js`: User logic
- `controllers/adminController.js`: Admin logic
- `models/User.js`, `Reservation.js`, `Menu.js`: Mongoose schemas
- `middleware/authMiddleware.js`: JWT verification

##  Dependencies

- express, mongoose, jsonwebtoken, bcryptjs
- multer, cloudinary, cors, dotenv