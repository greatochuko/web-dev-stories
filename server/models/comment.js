import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.SchemaTypes.ObjectId, required: true },
  message: { type: String, required: true },
  children: { type: [mongoose.SchemaTypes.ObjectId], default: [] },
  parent: { type: mongoose.SchemaTypes.ObjectId },
});

export const Comment = mongoose.model("comment", commentSchema);
