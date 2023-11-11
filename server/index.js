import express from "express";
import authRouter from "./routes/authRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);

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
