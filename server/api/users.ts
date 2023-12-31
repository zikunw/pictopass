import express, { Router } from "express";
import { prisma } from "../utils/prisma";
import { isJWTValid } from "../utils/jwt";
import { JWTBodyParams, JWTData, VisibleUser } from "../types";

const router: Router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();

    return res.status(200).json(users);
  });

  router.delete("/", async (req, res) => {
    const users = await prisma.user.deleteMany();

    return res.status(200).json(users);
  });
}

router.post("/fetch", async (req, res) => {
  const { jwt }: JWTBodyParams = req.body;
  if (!jwt) {
    return res.status(400).json({ error: "Invalid body properties" });
  }

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

  // @ts-ignore - We'll typecast this later
  delete user.id;
  // @ts-ignore - We'll typecast this later
  delete user.passHashSalt;

  const visibleUser: VisibleUser = user as VisibleUser;

  return res.status(200).json(visibleUser);
});

export default router;
