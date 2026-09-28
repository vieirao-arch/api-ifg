import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [disciplinas] = await banco.query('select * from disciplinas')
resposta.json(disciplinas)
}
const criar = async (pedido,resposta) => {
    const {nome,codico,id_curso} = pedido.body
    const [resultado] = await banco.query('insert into disciplinas(nome,codico,id_curso) values(?,?,?)',
        [matricula,nome,codico,id_curso]
    )
    resposta.json({id: resultado.insertid,nome,codico,id_curso})
}
const editar = async (pedido,resposta) => {
    const {nome,codico,id_curso} = pedido.body
    const {id} = pedido.params
    const [ resultado] = await banco.query(
        
        'update disciplinas set matricula = ?, nome = ?, codico-id = ?, id_curso =?',
    [nome,codico,id_curso])
    if(resultado.affectedRows === 0) {
        resposta.json({mensagem:'disciplina não encontrado!'})
        resposta.json({mensagem:'disciplina editado com sucesso!'})
    }
    const deletar = async (pedido,resposta) => {
        const {id} = pedido.params
        const [resultado] = await banco.query('delete from disciplinas where id =?',[id])
        if(resultado.affectedRows ===0) {
            resposta.json({mensagem:'disciplina não encontrado!'})
        resposta.json({mensagem:'disciplina deletado com sucesso!'})
        }
    }
}

export{listar,criar,editar,deletar}
