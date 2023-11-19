import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

export default router;
