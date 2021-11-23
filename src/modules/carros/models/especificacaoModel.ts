import {v4 as uuidv4} from "uuid"

class Especificacao{
  id?: string
  nome: string
  descricao: string
  created_at: Date

  constructor(){
    this.id = uuidv4()
  }

}

export default Especificacao