import CategoriaRepositorio from "../../database/categoriaRepositorio";
import CreateCategoriaController from "./CreateCategoriaController";
import CreateCategoriaUseCase from "./createCategoriaUseCase";


const categoriaRepositorio = CategoriaRepositorio.getInstance();
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepositorio);
const createCategoriaController = new CreateCategoriaController(createCategoriaUseCase);

export {createCategoriaController}