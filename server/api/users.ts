import express, { Router, Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { isJWTValid } from "../utils/jwt";
import { JWTData } from "../types";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  return res.status(200).json(users);
});

router.delete("/", async (req, res) => {
  const users = await prisma.user.deleteMany();

  return res.status(200).json(users);
});

router.post("/fetch", async (req, res) => {
  const { jwt } = req.body;
  const isValid = await isJWTValid(jwt);

  if (!isValid) {
    return res.status(401).json({ error: "Invalid JWT" });
  }

  const jwtData = isValid as JWTData;

  const user = await prisma.user.findUnique({
    where: {
      id: jwtData.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  delete user.id;
  delete user.passHashSalt;

  return res.status(200).json(user);
});

export default router;
