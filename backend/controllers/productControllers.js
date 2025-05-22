import productModel from "../models/productModels.js";  
import cloudinary from "../config/cloudinary.js";  

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file;

       console.log("BODY:", req.body);
       console.log("FILE:", req.file);

    if (!name || !price || !description || !category) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    let imageUrl = "https://via.placeholder.com/150";
    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }

    const productData = {
      name,
      description,
      category,
      price: parseFloat(price),
      image: imageUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("ERROR ADDING PRODUCT:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while adding product",
      error: error.message,
    });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {

  res.json({ success: false, message: "Not implemented yet" });
};

export { addProduct, listProducts, removeProduct, singleProduct };