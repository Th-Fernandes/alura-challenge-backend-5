import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req:Request, res:Response) => {
  return res.json({message: 'logged in'})
})

export default router;