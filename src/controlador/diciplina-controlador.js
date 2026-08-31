import { disciplinas } from "../dados/db.js"

const listar = ((pedido, resposta) => {
    resposta.json(disciplinas)
})
const criar = ( (pedido, resposta) => {
    
    const disciplina = {
        id:disciplinas.length + 1,
        matricula:pedido.body.matricula,
        nome:pedido.body.nome,
        dataNasc:pedido.body.dataNasc,
        email:pedido.body.email
    }
    disciplinas.push(disciplina)
    resposta.json(disciplina)
})
const editar = ( (pedido,resposta)  => {
    const index = disciplinas.findIndex(disciplina => disciplina.id == pedido.params.id)
    if(index == -1) {
        return resposta.json({mensagem:"disciplina não encontrado!"})
    }
    disciplinas[index] = {...disciplinas[index], ...pedido.body}
    resposta.json(disciplinas[index])
})
const deletar = ((pedido, resposta) => {
    const index = disciplinas.findIndex(disciplina => disciplina.id == pedido.params.id)
    if (index === -1) {
        return resposta.json({mensagem:"disciplina não encontrado"})
    }
    disciplinas.splice(index,1)
    resposta.json({mensagem:"disciplina deletado com sucesso"})

})

export { listar, criar , editar , deletar }