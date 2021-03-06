import ListEspecificacaoRepository from "../../database/implementations/especificacaoRepositorio";
import ListEspecificacaoUseCase from "./listEspecificacaoUseCase";
import ListEspecificacaoController from "./listEspecificacaoController"

const listEspecificacaoRepositorio = ListEspecificacaoRepository.getInstance()
const listEspecificacaoUseCase = new ListEspecificacaoUseCase(listEspecificacaoRepositorio)
const listEspecificacaoController = new ListEspecificacaoController(listEspecificacaoUseCase)

export {listEspecificacaoController}