import CreateEspecificacaoUseCase from "./createEspecificacaoUseCase"
import {Request, Response} from "express"

class createEspecificacaoController{
  createEspecificacaoUseCase: CreateEspecificacaoUseCase

  constructor(createEspecificacaoUseCase: CreateEspecificacaoUseCase){
    this.createEspecificacaoUseCase = createEspecificacaoUseCase
  }

  handle(req: Request, res: Response){
    const {nome, descricao} = req.body
    this.createEspecificacaoUseCase.execute({nome, descricao})
    return res.status(200).json({Message: "Especificacao criada com sucesso :)"})
  }
}

export default createEspecificacaoController