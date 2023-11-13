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
    reads: { type: Number, default: 0 },
    comments: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "comment",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postSchema);
