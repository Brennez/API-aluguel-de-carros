import {Request, Response } from "express"
import CreateCategoriaUseCase from "./createCategoriaUseCase"


class CreateCategoriaController{
  createCategoriaUseCase: CreateCategoriaUseCase

  constructor(createCategoriaUseCase: CreateCategoriaUseCase){
    this.createCategoriaUseCase = createCategoriaUseCase;
  }

  handle(req: Request, res: Response){
    const {nome, descricao} = req.body
    // console.log("cheguei aqui (função handle)")
    this.createCategoriaUseCase.execute({nome, descricao})
    return res.status(200).json({menssagem: "Categoria dicionada com sucesso"})
  }
}

export default CreateCategoriaController