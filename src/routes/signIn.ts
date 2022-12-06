import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/", async (req:Request, res:Response) => {
  const { username, password } = req.body;
  let userVerify;

  try 
  {
    userVerify = await prisma.user.findFirstOrThrow({
      where: { username, password }
    })
  }
  catch(error) 
  {
    res.json(error)
  }

  return res.json({status: 'ok', ...userVerify})
})

export default router;