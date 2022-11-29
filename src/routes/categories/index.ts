import express, { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { validationResult } from 'express-validator';
import { categoryValidation } from "./validation";

interface Category {
  title: string;
  color: string;
}

const router = express.Router();

router.get("/", async (req:Request, res:Response) => {
  const categories = await prisma.category.findMany();

  return res.json(categories)
})

router.get("/:id", async (req:Request, res:Response) => {
  const { id } = req.params;
  let category;

  try {
    category = await prisma.category.findUniqueOrThrow({
      where: { id: Number(id) }
    })
  } catch (error) {
    return res.status(404).json({
      message: "categoria não encontrada. Certifique se o id está correto.",
      error
    })
  }

  return res.status(200).json(category)
  
})

router.post("/",
  categoryValidation.title,
  categoryValidation.color
,async (req:Request, res:Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, color }:Category = req.body; 

  const category = await prisma.category.create({
    data: { title, color }
  })

  return res.status(201).json(category)
})

router.patch("/:id", async ( req:Request, res:Response) => {
  const { id } = req.params;
  const {title, color}:Category = req.body;
  let updatedCategory;

  try {
    updatedCategory = await prisma.category.update({
      where: { id: Number(id) },
      data: { title, color }
    })
  } catch(error) {
    return res.status(500).json({error})
  } 

  return res.status(200).json(updatedCategory)
})

router.delete("/:id", async ( req:Request, res:Response) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: {id: Number(id)}
    })
  } catch(error) {
    return res.status(500).json(error)
  }

  return res.status(200).json({message: "Categoria deletada com sucesso!"})


})

export default router;
