import { body } from 'express-validator';

export const videoValidations = {
  title:  body('title')
    .isLength({min: 3}).withMessage("O título deve conter ao menos 3 caracteres")
    .isLength({max: 45}).withMessage("O título ultrapassou o limite de 45 caracteres."),
  description: body('description')
    .isLength({min: 3}).withMessage("A descrição deve conter ao menos 3 caracteres"),
  url: body('url')
    .isURL().withMessage("Esse campo só aceita URL's")
}