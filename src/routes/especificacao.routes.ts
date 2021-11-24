import {Router} from "express"
import { createEspecificacaoController } from "../modules/carros/useCase/CreateEspecificacao/"
import { listEspecificacaoController } from "../modules/carros/useCase/ListEspecificacao"

const especificacaoRotas = Router()

especificacaoRotas.post("/especificacao", (req, res)=>{
  const {nome, descricao} = req.body
  // console.log(nome, descricao)
 
  return createEspecificacaoController.handle(req, res)
})

especificacaoRotas.get("/especificacao", (req, res)=>{
  return listEspecificacaoController.handle(req, res)
})

export default especificacaoRotas