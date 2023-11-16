import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.SchemaTypes.ObjectId, required: true },
    message: { type: String, required: true },
    children: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "comment",
    },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: "comment" },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("comment", commentSchema);
