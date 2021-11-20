import {Router} from 'express'
import CategoriaRepositorio from '../modules/carros/database/categoriaRepositorio'
import { createCategoriaController } from '../modules/carros/useCase/createCategoria'
import CreateCategoriaUseCase from '../modules/carros/useCase/createCategoria/createCategoriaUseCase'

// import Categoria from '../models/categoriaModels'  

const categoriaRotas = Router()

categoriaRotas.post("/categoria", (req, res)=>{
    return createCategoriaController.handle(req, res)

  
  // console.log(nome,descricao, categoria.id, categoria.created_at)

})

// categoriaRotas.get("/categoria", (req, res)=>{
//     return res.json({categoria: categoriaRepositorio.list()})
//   })

export default categoriaRotas