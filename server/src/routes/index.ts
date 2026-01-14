import express from "express";
import userRoutes from "./user.routes"; // Import other route files as needed

const router = express.Router();

// Example root route
router.get("/", (req, res) => {
	res.json({ message: "Welcome to Stotra API" });
});

router.use("/users", userRoutes); // Example: Add user routes

export default router;
