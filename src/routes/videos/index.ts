import express, { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { videoValidations } from "./validation";
import { validationResult } from 'express-validator';
import { verifyJWT } from "../../lib/verifyJWT";

const router = express.Router();

router.get("/", verifyJWT ,async(req, res) => {
  const {search, page} = req.query

  if (search) {
    const videoByTitle = await prisma.video.findMany({
      where: {
        title: {
          contains: search as string
        }
      }
    })
    return res.status(200).json(videoByTitle)  
  }

  if(page) {
    const videosPaginated = await prisma.video.findMany({
      skip: 5 * Number(page),
      take: 5
    })
    
    return res.status(200).json(videosPaginated);
  }

  const videos = await prisma.video.findMany();
  return res.status(200).json(videos);
});

router.get("/free", async (req, res) => {
  const videos = await prisma.video.findMany({ take: 5 });

  return res.status(200).json({
    message: 'realize o login para liberar o acesso a todos os videos',
    videos
  })
})

router.get("/:id",verifyJWT , async (req, res) => {
  const {id} = req.params;

  const getVideoById = await prisma.video.findUnique({
    where: {
      id: Number(id)
    }
  })

  if(getVideoById === null) return res.status(404).json({message: "Não foi possível encontrar o video solicitado pois ele não existe no banco de dados."})
  return res.status(200).json(getVideoById)
})

router.post("/",
  verifyJWT,
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
  verifyJWT,
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

router.delete("/:id", verifyJWT ,async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.video.delete({
      where: { id: Number(id) },
    })
  } catch(err) {
    return res.status(500).json( {message: 'Não foi possível excluir o video'} )
  }

  return res.status(200).json({ message: "video deletado com sucesso!" })
})

export default router;