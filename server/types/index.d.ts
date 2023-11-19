import { RedisClientType } from "redis";
import { User } from "@prisma/client";

export type RegisterBodyParams = {
  username?: string[];
  passphrase?: number[];
  name?: string;
};

export type LoginBodyParams = {
  username?: string[];
  passphrase?: number[];
};

export type SignoutBodyParams = {
  jwt?: string;
};

export type JWTBodyParams = {
  jwt?: string;
};

export type JWTData = {
  userId: string;
};

export type RedisClient = RedisClientType<any, any, any>;

export type VisibleUser = Omit<User, "id" | "passHashSalt">;