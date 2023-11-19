import bcrypt from "bcrypt";

export const hashAndSalt = async (password: string): Promise<string> => {
  const saltRounds = Number(process.env.SALT_ROUNDS);
  return await bcrypt.hash(password, saltRounds);
};

export const compareHash = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
