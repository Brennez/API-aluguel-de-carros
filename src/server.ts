import express from "express"
import categoriaRotas from "./routes/categorias.routes"

const app = express()

app.use(express.json())

app.use(categoriaRotas)

app.listen("3000", ()=>{
  console.log("SERVIDOR RODANDO NA PORTA 3000")
})