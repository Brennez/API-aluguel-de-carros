import CategoriaRepositorio from "../../database/implementations/categoriaRepositorio";
import ListCategoriaController from "./listCategoriaController";
import ListCategoriaUseCase from "./listCategoriaUseCase";


const categoriaRepositorio = CategoriaRepositorio.getInstance();
const listCategoriaUseCase = new ListCategoriaUseCase(categoriaRepositorio);
const listCategoriaController = new ListCategoriaController(listCategoriaUseCase);

export {listCategoriaController}