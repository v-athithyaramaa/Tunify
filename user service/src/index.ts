import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "Tunify",
    });
    console.log("MongoDB connected !");
  } catch (err) {
    console.error("Error connecting to the User DB", err);
    throw err;
  }
};

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Welcome to the Tunify User Service");
  res.send("Welcome to the Tunify User Service");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
