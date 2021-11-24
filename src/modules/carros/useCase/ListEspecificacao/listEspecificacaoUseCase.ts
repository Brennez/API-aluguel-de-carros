import { IEspecificacaoRepository } from "../../database/IEspecificacaoRepository";
import Especificacao from "../../models/especificacaoModel";

class ListEspecificacaoUseCase{
  private especificacaoRepository: IEspecificacaoRepository
  constructor(especificacaoRepository: IEspecificacaoRepository){
    this.especificacaoRepository = especificacaoRepository
  }

  execute(): Especificacao[]{
    return this.especificacaoRepository.list()
  }
}

export default ListEspecificacaoUseCase