import {Router} from 'express'
import { createCategoriaController } from '../modules/carros/useCase/createCategoria'
import { listCategoriaController } from '../modules/carros/useCase/ListCategoria'


// import Categoria from '../models/categoriaModels'  

const categoriaRotas = Router()

categoriaRotas.post("/categoria", (req, res)=>{
    return createCategoriaController.handle(req, res)

  
  // console.log(nome,descricao, categoria.id, categoria.created_at)

})

categoriaRotas.get("/categoria", (req, res)=>{
    return listCategoriaController.handle(req, res)
  })
  
//TEM QUE FALAR PRO SERVIDOR USAR ESSA ROTA
// categoriaRotas.post("/especificacao", (req, res) =>{
//   return res.json({message: "ola"})
// })

export default categoriaRotas