import { RedisClientType, createClient } from "redis";

let redisClient: RedisClientType<any, any, any>;

const createRedisClient = async () => {
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
    .connect()) as RedisClientType<any, any, any>;
};

export const getRedisClient = async () => {
  if (!redisClient) {
    await createRedisClient();
  }

  return redisClient;
};
