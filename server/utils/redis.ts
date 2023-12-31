import { createClient } from "redis";
import { RedisClient } from "../types";

let redisClient: RedisClient;

const createRedisClient = async (): Promise<void> => {
  redisClient = (await createClient({
    url: process.env.REDIS_URL,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  })
    .on("error", (error) => {
      console.log("Redis client error", error);
    })
    .on("connect", () => {
      console.log("Redis client connected");
    })
    .connect()) as RedisClient;
};

export const getRedisClient = async (): Promise<RedisClient> => {
  if (!redisClient) {
    await createRedisClient();
  }

  return redisClient;
};
