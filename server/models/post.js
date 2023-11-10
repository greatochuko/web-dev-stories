import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postSchema);
