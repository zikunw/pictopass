import express, { Router } from "express";
import {
  LoginBodyParams,
  RegisterBodyParams,
  SignoutBodyParams,
} from "../types";
import { SHAPES } from "../utils/constants";
import { compareHash, hashAndSalt } from "../utils/bcrypt";
import { prisma } from "../utils/prisma";
import { limiter } from "../utils/express";
import { createJWT, invalidateJWT, isJWTValid } from "../utils/jwt";

const router: Router = express.Router();

router.use(limiter);

router.post("/login", async (req, res) => {
  const { username, passphrase }: LoginBodyParams = req.body;

  if (!username || !passphrase) {
    return res.status(400).json({ error: "Invalid body properties" });
  }

  // Check if the username is an array of Shape
  const isUsernameAllShapes =
    username.every((shape: string) => SHAPES.includes(shape));

  if (!isUsernameAllShapes) {
    return res.status(400).json({ error: "Invalid username" });
  }

  const usernameString = username.join("");

  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: usernameString,
      },
    },
  });

  const isMatch = user
    ? await compareHash(passphrase.join(""), user.passHashSalt)
    : false;

  if (!user || !isMatch) {
    return res.status(401).json({ error: "Invalid username or passphrase" });
  }

  const jwt = await createJWT(user.id);

  return res.status(200).json({ jwt });
});

router.post("/register", async (req, res) => {
  const { username, passphrase }: RegisterBodyParams = req.body;

  if (!username || !passphrase) {
    return res.status(400).json({ error: "Invalid body properties" });
  }

  // Check if the username is an array of Shape
  const isUsernameAllShapes =
    username.every((shape: string) => SHAPES.includes(shape));
  if (!isUsernameAllShapes) {
    return res.status(400).json({
      error: "Username must be an array of Shape",
    });
  }

  const usernameString = username.join("");
  const passHashSalt = await hashAndSalt(passphrase.join(""));

  let newUser;
  try {
    newUser = await prisma.user.create({
      data: {
        username: usernameString,
        passHashSalt,
      },
    });
  } catch (e) {
    return res.status(400).json({
      error: "Username already exists",
    });
  }

  if (!newUser) {
    return res.status(500).json({
      error: "Failed to create user",
    });
  }

  return res.status(201).json({
    created: true,
  });
});

router.post("/signout", async (req, res) => {
  const { jwt }: SignoutBodyParams = req.body;

  if (!jwt) {
    return res.status(400).json({ error: "Invalid body properties" });
  }

  if (!isJWTValid(jwt)) {
    return res.status(401).json({ message: "Invalid JWT" });
  }

  await invalidateJWT(jwt);

  return res.status(200).json({ message: "Successfully signed out" });
});

export default router;
