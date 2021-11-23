import {Router} from "express"
import { createEspecificacaoController } from "../modules/carros/useCase/CreateEspecificacao/"

const especificacaoRotas = Router()

especificacaoRotas.post("/especificacao", (req, res)=>{
  const {nome, descricao} = req.body
  console.log(nome, descricao)
 
  return createEspecificacaoController.handle(req, res)
})

export default especificacaoRotas