import express from "express";
import { prisma } from "../../lib/prisma";
import { videoValidations } from "./validation";
import { validationResult } from 'express-validator';

const router = express.Router();

router.get("/", async(req, res) => {
  const videos = await prisma.video.findMany();
  return res.json(videos);
});

router.get("/:id", async (req, res) => {
  const {id} = req.params

  const getVideoById = await prisma.video.findUnique({
    where: {
      id: Number(id)
    }
  })

  if(getVideoById === null) return res.status(404).json({message: "Não foi possível encontrar o video solicitado pois ele não existe no banco de dados."})
  return res.json(getVideoById)
})

router.post("/",
 videoValidations.title,
 videoValidations.description,
 videoValidations.url
, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {title, description, url} = req.body;

  const createVideo = await prisma.video.create({
    data: { title, description, url }
  })

  return res.status(201).json(createVideo)
})

export default router;