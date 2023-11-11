import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import { generateJwt } from "../utils/authUtils.js";

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid Email and password combination");
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
    if (!passwordIsCorrect)
      throw new Error("Invalid Email and password combination");
    const token = generateJwt(user.id);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
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
    let errorMessage = err.message;
    if (err.message.includes("duplicate key error")) {
      errorMessage = "email already in use";
    }
    res.status(400).json({ error: errorMessage });
  }
}
