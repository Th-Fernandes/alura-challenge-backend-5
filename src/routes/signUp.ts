import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/", async (req:Request, res:Response) => {
  const { username, password } = req.body;
  let createUser;
  
  try {
    createUser = await prisma.user.create({
      data: { username, password }
    })  
  } 
  catch(error) {
    return res.status(400).json(error)
  }


  return res.status(201).json(createUser);
})

export default router;