import jwt from "jsonwebtoken";

export function generateJwt(id) {
  try {
    const token = jwt.sign(id, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
  }
}
