import { body } from "express-validator";



export const categoryValidation = {
  title: body('title')
    .isString()
    .isLength({min: 3, max: 15}),

  color: body('color')
    .isHexColor()
}