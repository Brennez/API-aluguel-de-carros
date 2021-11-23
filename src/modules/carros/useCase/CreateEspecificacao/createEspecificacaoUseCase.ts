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
    this.especificacaoRepository.create({nome, descricao})
  }
}

export default CreateEspecificacaoUseCase