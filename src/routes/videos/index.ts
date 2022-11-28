import express, { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { videoValidations } from "./validation";
import { validationResult } from 'express-validator';

const router = express.Router();

router.get("/", async(req, res) => {
  const videos = await prisma.video.findMany();
  return res.json(videos);
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;

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

router.patch("/:id",
videoValidations.title,
videoValidations.description,
videoValidations.url
, async (req:Request, res:Response) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const videoWithUpdatedData = await prisma.video.update({
    where: { id: Number(id) },
    data: { 
      title,
      description,
      url
    }
  })

  return res.json(videoWithUpdatedData)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.video.delete({
      where: { id: Number(id) },
    })
  } catch(err) {
    return res.status(500).json( {message: 'Não foi possível excluir o video'} )
  }

  return res.json({ message: "video deletado com sucesso!" })
})

export default router;