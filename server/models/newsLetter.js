import mongoose from "mongoose";

const newsletterSubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const newsletterSubscriber = mongoose.model(
  "newsletterSubscriber",
  newsletterSubscriberSchema
);
