import express from "express"
import { loginUser, registerUser, getAllUsers } from "../controllers/userControllers.js"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/all", getAllUsers);

export default userRouter;
