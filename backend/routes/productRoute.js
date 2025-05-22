import express from 'express'
import {addProduct, listProducts, removeProduct, singleProduct} from  '../controllers/productControllers.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'


const productRouter = express.Router()
// Routes to create.fentch or delete a product
productRouter.post('/add', adminAuth, upload.single("image"), addProduct)
productRouter.get('/list', listProducts)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.get('/single', singleProduct)

export default productRouter