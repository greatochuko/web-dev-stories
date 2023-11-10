import bcrypt from "bcryptjs";
import { User } from "../models/user.js";

export function login(req, res) {
  res.json("login");
}

export async function register(req, res) {
  try {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password);
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: encryptedPassword,
    });
    res.json(newUser);
  } catch (err) {
    res.json({ error: err.message });
  }
}
