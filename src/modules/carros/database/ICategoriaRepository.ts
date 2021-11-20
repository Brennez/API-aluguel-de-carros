import Categoria from "../models/categoriaModels";

interface Icategoria{
  nome: string
  descricao: string 
}

interface ICategoriaRepository{
  create({nome, descricao}: Icategoria):void;
  list(): Categoria[];
  findByName(nome:string): Categoria;
}

export {ICategoriaRepository, Icategoria}

