import express, { Router, Request, Response } from "express";
import {
  LoginBodyParams,
  RegisterBodyParams,
  SignoutBodyParams,
} from "../types";
import { Shape } from "@prisma/client";
import { compareHash, hashAndSalt } from "../utils/bcrypt";
import { prisma } from "../utils/prisma";
import { limiter } from "../utils/express";
import { createJWT, invalidateJWT, isJWTValid } from "../utils/jwt";

const router: Router = express.Router();

router.use(limiter);

router.post("/login", async (req, res) => {
  const { username, passphrase }: LoginBodyParams = req.body;

  // Check if the username is an array of Shape
  const isUsernameAllShapes = username.every((entry) =>
    (Object.values(Shape) as string[]).includes(entry)
  );
  if (!isUsernameAllShapes) {
    return res.status(400).json({ error: "Invalid username" });
  }

  // Convert the username array to Shape array
  const usernameShapes = username.map((entry) => entry as Shape);

  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: usernameShapes,
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
  const { username, passphrase, name }: RegisterBodyParams = req.body;

  // Check if the username is an array of Shape
  const isUsernameAllShapes = username.every((entry) =>
    (Object.values(Shape) as string[]).includes(entry)
  );
  if (!isUsernameAllShapes) {
    return res.status(400).json({
      error: "Username must be an array of Shape",
    });
  }

  const usernameShapes = username.map((entry) => entry as Shape);
  const passHashSalt = await hashAndSalt(passphrase.join(""));
  const newUser = await prisma.user.create({
    data: {
      username: usernameShapes,
      passHashSalt,
      name,
    },
  });

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

  if (!isJWTValid(jwt)) {
    return res.status(401).json({ message: "Invalid JWT" });
  }

  await invalidateJWT(jwt);

  return res.status(200).json({ message: "Successfully signed out" });
});

export default router;
