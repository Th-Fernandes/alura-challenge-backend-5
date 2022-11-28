import express from "express";
import { prisma } from "./lib/prisma";

const app = express();

app.get("/", async (request, response) => {
  const videos = await prisma.video.findMany()
  return response.json({videos});
});

app.listen(3333, () => {
  console.log("HTTP Server running!");
});
