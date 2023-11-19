export const checkEnv = (): void => {
  const generalKeys = ["PORT", "ADMIN_KEY", "NODE_ENV"];
  const jwtKeys = ["JWT_SECRET"];
  const redisKeys = [
    "REDIS_URL",
    "REDIS_USERNAME",
    "REDIS_PASSWORD",
    "REDIS_DB",
  ];
  const databaseKeys = ["DATABASE_URL"];

  const allKeys = [
    ...generalKeys,
    ...jwtKeys,
    ...redisKeys,
    ...databaseKeys,
  ];

  allKeys.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`${key} is not defined`);
    }
  });
};
