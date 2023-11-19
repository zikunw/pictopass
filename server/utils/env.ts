export const checkEnv = () => {
  const jwtKeys = ["JWT_SECRET"];

  jwtKeys.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`${key} is not defined`);
    }
  });

  const redisKeys = [
    "REDIS_URL",
    "REDIS_USERNAME",
    "REDIS_PASSWORD",
    "REDIS_DB",
  ];

  redisKeys.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`${key} is not defined`);
    }
  });

  const databaseKeys = ["DATABASE_URL"];

  databaseKeys.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`${key} is not defined`);
    }
  });
};
