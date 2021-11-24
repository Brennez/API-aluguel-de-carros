import ListEspecificacaoUseCase from "./listEspecificacaoUseCase";
import {Request, Response} from "express"

class ListEspecificacaoController{
  listEspecificacaoUseCase: ListEspecificacaoUseCase

  constructor(listEspecificacaoUseCase: ListEspecificacaoUseCase){
    this.listEspecificacaoUseCase = listEspecificacaoUseCase
  }

  handle(req: Request, res: Response){
   const especificacoes =  this.listEspecificacaoUseCase.execute()
   return res.json(especificacoes)
  }
}

export default ListEspecificacaoController