import express from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.get("/", async(req, res) => {
  const videos = await prisma.video.findMany();
  return res.json({data: videos});
});

export default router;