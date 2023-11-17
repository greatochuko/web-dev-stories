import { newsletterSubscriber } from "../models/newsLetter.js";

export async function createNewSubscriber(req, res) {
  try {
    const { email } = req.body;
    const newSubscriber = await newsletterSubscriber.create({ email });
    res.json(newSubscriber);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
