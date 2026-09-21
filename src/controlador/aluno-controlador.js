import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [alunos] = await banco.query('select * from alunos')
resposta.json(alunos)
}
const criar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const [resultado] = await banco.query('insert into alunos(matricula,nome,dataNasc,email) values(?,?,?.?)',
        [matricula,nome,dataNasc,email]
    )
    resposta.json({id: resultado.insertid,matricula,nomem,dataNasc,email})
}
const editar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const {id} = pedido.params
}

export{listar}
