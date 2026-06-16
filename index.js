const express = require("express")
const app = express()
app.use(express.json())
let usuarios =[{
    nome:"Thiago",
    idade:38
}]
app.get("/",(req,res) => {
 res.json({mensagem: "O servidor tá no ar !"})
})
app.get("/usuarios", (req,res) => {
    res.json({usuarios: usuarios})
})

app.post('/usuarios',(pedido,resposta)=>{

    usuarios.push(pedido.body)
    resposta.json({
        mensagem:"Salvo com sucesso."
    })
})
app.delete("/usuarios/:nome",(pedido,resposta) =>{
    const usuarioApagar = usuarios.find(u => u.nome === pedido.params.nome)
    usuarios = usuarios.filter(u => u.nome  !== pedido.params.nome)
    resposta.json({
        mensagem: " Usuário deletado com suceso !",
        usuariosApagado: usuarioApagar
    })

})
app.listen(3000,() => {
    console.log("🚀 Hellow world")
})