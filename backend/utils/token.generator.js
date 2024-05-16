import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const userToken = async (userId, userEmail) => {
  const payload = {
    id: userId,
    email: userEmail,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  return token;
};
