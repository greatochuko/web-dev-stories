import express from "express";
import authRouter from "./routes/authRoutes.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRouter);

async function connectToServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/web-dev-stories");
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

await connectToServer();
