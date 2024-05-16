import bcrypt from "bcrypt";

export const passwordEncrypt = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPawssord = await bcrypt.hash(password, salt);
  return hashedPawssord;
};

export const passwordCompare = async (userPassword, inputPassword) => {
  const verifyPassword = await bcrypt.compare(inputPassword, userPassword);
  return verifyPassword;
};
