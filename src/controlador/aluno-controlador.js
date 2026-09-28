import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [alunos] = await banco.query('select * from alunos')
resposta.json(alunos)
}
const criar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const [resultado] = await banco.query('insert into alunos(matricula,nome,dataNasc,email) values(?,?,?,?)',
        [matricula,nome,dataNasc,email]
    )
    resposta.json({id: resultado.insertid,matricula,nome,dataNasc,email})
}
const editar = async (pedido,resposta) => {
    const {matricula,nome,dataNasc,email} = pedido.body
    const {id} = pedido.params
    const [ resultado] = await banco.query(
        
        'update alunos set matricula = ?, nome = ?, dataNasc = ?, email =?',
    [matricula,nome,dataNasc,email])
    if(resultado.affectedRows === 0) {
        resposta.json({mensagem:'Aluno não encontrado!'})
        resposta.json({mensagem:'Aluno editado com sucesso!'})
    }
    const deletar = async (pedido,resposta) => {
        const {id} = pedido.params
        const [resultado] = await banco.query('delete from alunos where id =?',[id])
        if(resultado.affectedRows ===0) {
            resposta.json({mensagem:'Aluno não encontrado!'})
        resposta.json({mensagem:'Aluno deletado com sucesso!'})
        }
    }
}

export{listar,criar,editar,deletar}
