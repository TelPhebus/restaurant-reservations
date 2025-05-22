import express from 'express';
import { adminLogin } from '../controllers/adminController.js';

const router = express.Router();
// Route to login in the admin account
router.post('/login', adminLogin); 

export default router;