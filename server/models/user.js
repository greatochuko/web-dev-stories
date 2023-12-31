import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  imageUrl: {
    type: String,
    default:
      "https://web-dev-stories-server.onrender.com/placeholder-profile-image.png",
  },
  bio: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: { type: [mongoose.SchemaTypes.ObjectId], default: [], ref: "post" },
});

export const User = new mongoose.model("user", userSchema);
