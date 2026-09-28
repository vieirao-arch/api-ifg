import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [professores] = await banco.query('select * from professores')
resposta.json(professores)
}
const criar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const [resultado] = await banco.query('insert into professores(matricula,nome,dataNasc,email) values(?,?,?,?)',
        [matricula,nome,dataNasc,email]
    )
    resposta.json({id: resultado.insertid,matricula,nome,dataNasc,email})
}
const editar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const {id} = pedido.params
    const [ resultado] = await banco.query(
        
        'update professores set matricula = ?, nome = ?, dataNasc = ?, email =?',
    [matricula,nome,dataNasc,email])
    if(resultado.affectedRows === 0) {
        resposta.json({mensagem:'professor não encontrado!'})
        resposta.json({mensagem:'professor editado com sucesso!'})
    }
    const deletar = async (pedido,resposta) => {
        const {id} = pedido.params
        const [resultado] = await banco.query('delete from professores where id =?',[id])
        if(resultado.affectedRows ===0) {
            resposta.json({mensagem:'professor não encontrado!'})
        resposta.json({mensagem:'professor deletado com sucesso!'})
        }
    }
}

export{listar,criar,editar,deletar}
