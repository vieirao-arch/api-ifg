import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [cursos] = await banco.query('select * from cursos')
resposta.json(cursos)
}
const criar = async (pedido,resposta) => {
    const {nome,codico,qtd_semestre} = pedido.body
    const [resultado] = await banco.query('insert into cursos(nome,codico,qtd_semestre) values(?,?,?)',
        [matricula,nome,codico,qtd_semestre]
    )
    resposta.json({id: resultado.insertid,matricula,nome,codico,qtd_semestre})
}
const editar = async (pedido,resposta) => {
    const {nome,codico,qtd_semestre} = pedido.body
    const {id} = pedido.params
    const [ resultado] = await banco.query(
        
        'update cursos set matricula = ?, nome = ?,codico = ?, qtd_semestre =?',
    [nome,codico,qtd_semestre])
    if(resultado.affectedRows === 0) {
        resposta.json({mensagem:'cursos não encontrado!'})
        resposta.json({mensagem:'cursos editado com sucesso!'})
    }
    const deletar = async (pedido,resposta) => {
        const {id} = pedido.params
        const [resultado] = await banco.query('delete from cursos where id =?',[id])
        if(resultado.affectedRows ===0) {
            resposta.json({mensagem:'curso não encontrado!'})
        resposta.json({mensagem:'curso deletado com sucesso!'})
        }
    }
}

export{listar,criar,editar,deletar}
