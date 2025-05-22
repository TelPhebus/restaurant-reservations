import mongoose from "mongoose";

// Define the schema for the Admin authorization in the Login Panel
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("Admin", adminSchema);
