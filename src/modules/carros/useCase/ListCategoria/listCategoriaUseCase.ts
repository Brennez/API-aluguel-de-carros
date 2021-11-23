import {ICategoriaRepository} from "../../database/ICategoriaRepository"
import Categoria from "../../models/categoriaModels"

//princípio da inversão de dependência (módulos de alto nível não dependem de módulos de baixo nível)
class listCategoriaUseCase{
  private categoriaRepositorio: ICategoriaRepository

  constructor(categoriaRepositorio: ICategoriaRepository){
    this.categoriaRepositorio = categoriaRepositorio
  }

  execute(): Categoria[]{
    return this.categoriaRepositorio.list()

  }
}

export default listCategoriaUseCase