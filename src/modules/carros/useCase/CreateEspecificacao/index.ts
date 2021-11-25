import EspecificacaoRepositorio from "../../database/implementations/especificacaoRepositorio";
import CreateEspecificacaoUseCase from "./createEspecificacaoUseCase";
import CreateEspecificacaoController from "./createEspecificacaoController";

const especificacaoRepositorio = EspecificacaoRepositorio.getInstance()
const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacaoRepositorio)
const createEspecificacaoController = new CreateEspecificacaoController(createEspecificacaoUseCase)

export {createEspecificacaoController}