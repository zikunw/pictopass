import { JWTData } from "../types";
import { getRedisClient } from "./redis";
import { sign, verify } from "jsonwebtoken";

export const createJWT = async (userId: string) => {
  const redis = await getRedisClient();

  const data: JWTData = { userId };

  const token = sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  await redis.set(token, userId);
  await redis.expire(token, 60 * 60 * 24);

  return token;
};

export const invalidateJWT = async (jwt: string) => {
  const redis = await getRedisClient();

  await redis.del(jwt);
};

export const invalidateAllUserJWTs = async (userId: string) => {
    const redis = await getRedisClient();
};

export const isJWTValid = async (jwt: string) => {
  const redis = await getRedisClient();

  const userId = await redis.get(jwt);
  if (!userId) return false;

  return verify(jwt, process.env.JWT_SECRET);
};
