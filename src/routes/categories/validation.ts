import { body } from "express-validator";

export const categoryValidation = {
  title: body('title')
    .isString()
    .isLength({min: 3, max: 15})
    .withMessage("Foi enviado um campo em branco, não cumpriu o mínimo de 3 caracteres, ou excedeu o máximo de 15 caracteres"),

  color: body('color')
    .isHexColor()
    .withMessage("Foi enviado um campo em branco ou não foi enviado no formato HexColor.")
}