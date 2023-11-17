import express from "express";
import authRouter from "./routes/authRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import searchRouter from "./routes/searchRoutes.js";
import cors from "cors";
import commentRouter from "./routes/commentRoutes.js";
import newsletterRouter from "./routes/newsletterRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const whitelist = [
  "https://web-dev-stories.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, cb) {
      console.log(origin);
      if (whitelist.includes(origin) || !origin) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);
app.use("/api/comments", commentRouter);
app.use("/api/newsletter", newsletterRouter);

const LOCAL_URI = "mongodb://127.0.0.1:27017/web-dev-stories";

async function connectToServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

await connectToServer();

export default app;
