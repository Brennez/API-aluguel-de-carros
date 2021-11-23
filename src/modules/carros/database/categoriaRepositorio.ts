import Categoria from "../models/categoriaModels";
import { ICategoriaRepository, Icategoria } from "./ICategoriaRepository";

// interface Icategoria{
//   nome: string
//   descricao: string 
// }

class CategoriaRepositorio implements ICategoriaRepository{
  private categorias: Categoria[]

  private static INSTANCE: CategoriaRepositorio

  private constructor(){
    this.categorias = [];
  }

  //Retorna uma instacia de CategoriaRepositorio, caso CategoriaRepositorio não tenha sido instanciada
  public static getInstance(): CategoriaRepositorio{
    if(!CategoriaRepositorio.INSTANCE){
      CategoriaRepositorio.INSTANCE = new CategoriaRepositorio()
    }
    return CategoriaRepositorio.INSTANCE
  }
  //cria uma categoria
  create({nome, descricao}: Icategoria) {
    const categoria = new Categoria()
    //forma resumida
    // Object.assign(categoria, {nome, descricao, created_at: new Date()})
    //Forma normal
    categoria.nome = nome
    categoria.descricao = descricao
    categoria.created_at = new Date()
    this.categorias.push(categoria)
    // console.log(this.categorias)
  }

  //retorna a lista de categorias
  list(): Categoria[]  {
    return this.categorias
  }

  //Verifica se o nome de uma categoria já existe no banco de dados e a retorna caso tenha
  findByName(nome:string): Categoria{
    const categoriaExiste = this.categorias.find((categoria) => categoria.nome === nome)
    return categoriaExiste
  }

  // deleteByName(nome:string){
  //   const busca = nome
  //   var indice = this.categorias.indexOf(busca)
  // }
 
}

export default CategoriaRepositorio