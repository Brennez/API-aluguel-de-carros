import { IEspecificacaoRepository } from "../../database/IEspecificacaoRepository"

interface IRequest{
  nome: string
  descricao: string
}
class CreateEspecificacaoUseCase{
  private especificacaoRepository: IEspecificacaoRepository

  constructor(especificacaoRepository: IEspecificacaoRepository){
    this.especificacaoRepository = especificacaoRepository
  }

  execute({nome, descricao}: IRequest): void{
    const especificacao = this.especificacaoRepository.findByName(nome)
    if(especificacao){
      throw new Error(`Especificacao ${nome} já existe :/`)
    }else{
      this.especificacaoRepository.create({nome, descricao})
    }
  }
}

export default CreateEspecificacaoUseCase