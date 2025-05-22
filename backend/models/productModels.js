import mongoose from "mongoose";

// Define the schema for the products list
const productsSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
    date:{type:Number, required:true}
})

const productModel = mongoose.models.product || mongoose.model("product", productsSchema);

export default productModel