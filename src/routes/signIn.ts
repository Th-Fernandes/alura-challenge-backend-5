import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken"
import { user } from "@prisma/client";

const router = express.Router();

router.post("/", async (req:Request, res:Response) => {
  const { username, password } = req.body;
  let userVerify;

  try {
    userVerify = await prisma.user.findFirstOrThrow({
      where: { username, password }
    })

    if(userVerify) {
      const token = jwt.sign({id: userVerify.id}, 'ALURACHALLENGE5', {
        expiresIn: 57600 /* 16 hours */
      })

      return res.json({token, ...userVerify})
    }
    else {
      res.status(400).json({message: "não foi possível validar o usuário."})
    }
  }
  catch(error) {
    return res.json(error)
  }
})

export default router;