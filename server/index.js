import express from "express";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
