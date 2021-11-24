import Especificacao from "../models/especificacaoModel";
import {IEspecificacao, IEspecificacaoRepository } from "./IEspecificacaoRepository";

class EspecificacaoRepositorio implements IEspecificacaoRepository{
  //instancia do vetor de especificacoes
  private especificacoes: Especificacao[]

  //instancia da classe de EspecificacaoRepositorio
  private static INSTANCE: EspecificacaoRepositorio

  private constructor(){
    this.especificacoes = []
  }

  //verifica caso já exista uma intancia de especificacaoRepositorio, se n tiver ele cria
  public static getInstance(){
    if(!EspecificacaoRepositorio.INSTANCE){
      EspecificacaoRepositorio.INSTANCE = new EspecificacaoRepositorio()
    }
    return EspecificacaoRepositorio.INSTANCE
  }

  create({ nome, descricao }: IEspecificacao): void {
    const especificacao = new Especificacao()

    especificacao.nome = nome
    especificacao.descricao = descricao
    especificacao.created_at = new Date()

    //salva uma especificacao no vetor
    this.especificacoes.push(especificacao)
  }
  
  list(): Especificacao[] {
    return this.especificacoes
  }
  findByName(nome: string): Especificacao {
    throw new Error("Method not implemented.");
  }

}

export default EspecificacaoRepositorio