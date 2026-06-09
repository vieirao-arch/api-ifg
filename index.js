const express = require("express")
const app = express()
app.use(express.json())
const alunos = []
app.get("/alunos",(pedido, resposta) => {
    resposta.json(alunos)
})
app.post("/alunos", (pedido, resposta) => {
    
    const aluno = {
        matricula:pedido.body.matricula,
        nome:pedido.body.nome,
        dataNasc:pedido.body.dataNasc,
        email:pedido.body.email
    }
    alunos.push(aluno)
    resposta.json(aluno)
})
app.listen(3000,() => (
    console.log("API rodando na porta 3000!")
))
