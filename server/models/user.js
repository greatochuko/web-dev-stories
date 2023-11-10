import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: { type: [mongoose.SchemaTypes.ObjectId], default: [] },
});

export const User = new mongoose.model("user", userSchema);
