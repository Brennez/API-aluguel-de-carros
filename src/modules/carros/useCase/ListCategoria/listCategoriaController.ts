import {Request, Response } from "express"
import ListCategoriaUseCase from "./listCategoriaUseCase"


class ListCategoriaController{
  listCategoriaUseCase: ListCategoriaUseCase

  constructor(listCategoriaUseCase: ListCategoriaUseCase){
    this.listCategoriaUseCase = listCategoriaUseCase;
  }

  handle(req: Request, res: Response){
    const categorias = this.listCategoriaUseCase.execute()
    return res.json(categorias)
  }
}

export default ListCategoriaController