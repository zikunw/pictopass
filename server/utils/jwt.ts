import { JWTData } from "../types";
import { getRedisClient } from "./redis";
import { JwtPayload, sign, verify } from "jsonwebtoken";

export const createJWT = async (userId: string): Promise<string> => {
  const redis = await getRedisClient();

  const data: JWTData = { userId };

  const token = sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  await redis.set(token, userId);
  await redis.expire(token, 60 * 60 * 24);

  return token;
};

export const invalidateJWT = async (jwt: string): Promise<void> => {
  const redis = await getRedisClient();

  await redis.del(jwt);
};

export const isJWTValid = async (jwt: string): Promise<string | JwtPayload | boolean> => {
  const redis = await getRedisClient();

  const userId = await redis.get(jwt);
  if (!userId) return false;

  return verify(jwt, process.env.JWT_SECRET);
};
