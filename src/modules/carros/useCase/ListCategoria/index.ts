import CategoriaRepositorio from "../../database/categoriaRepositorio";
import ListCategoriaController from "./ListCategoriaController";
import ListCategoriaUseCase from "./listCategoriaUseCase";


const categoriaRepositorio = CategoriaRepositorio.getInstance();
const listCategoriaUseCase = new ListCategoriaUseCase(categoriaRepositorio);
const listCategoriaController = new ListCategoriaController(listCategoriaUseCase);

export {listCategoriaController}