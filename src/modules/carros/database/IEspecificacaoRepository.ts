import Especificacao from "../models/especificacaoModel"

interface IEspecificacao{
  nome: string
  descricao: string

}

interface IEspecificacaoRepository{
  create({nome, descricao}: IEspecificacao): void;
  list(): Especificacao[];
  findByName(nome: string): Especificacao
}

export {IEspecificacaoRepository, IEspecificacao}