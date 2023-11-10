import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import { generateJwt } from "../utils/authUtils.js";

export function login(req, res) {
  try {
    res.json("login");
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function register(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: encryptedPassword,
    });
    const token = generateJwt(newUser.id);
    res.json({ token });
  } catch (err) {
    res.json({ error: err.message });
  }
}
