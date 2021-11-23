import {ICategoriaRepository} from "../../database/ICategoriaRepository"

interface IRequest{
  nome: string
  descricao: string
}

//princípio da inversão de dependência (módulos de alto nível não dependem de módulos de baixo nível)
class CreateCategoriaUseCase{
  private categoriaRepositorio: ICategoriaRepository

  constructor(categoriaRepositorio: ICategoriaRepository){
    this.categoriaRepositorio = categoriaRepositorio
  }

  execute({nome, descricao}: IRequest): void{
    // console.log("OPA CHEGUEI AQUI TAMBÉM (Função execute)")
    const categoriaExiste = this.categoriaRepositorio.findByName(nome)
  //Se o nome ñ existe então n retorna nada, se existe nome então retorna onome
    if(categoriaExiste){
      throw new Error(`A categoria ${nome} já existe :/`)
    }else{
      this.categoriaRepositorio.create({nome, descricao})
      // return res.status(200).json({menssagem: "Categoria dicionada com sucesso"})
    }

  }
}

export default CreateCategoriaUseCase