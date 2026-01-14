import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const mongoURI = process.env.STOTRA_MONGODB_URI || "mongodb://localhost:27017/stotra"; // Default fallback

mongoose
	.connect(mongoURI)
	.then(() => console.log("✅ Connected to Database"))
	.catch((err) => console.error("❌ MongoDB Connection Error:", err));

export default mongoose;

