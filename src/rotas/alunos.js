import { Router } from "express"
const controlador = require ('../controlador/aluno-controlador')

const router = Router ()
 router.length('/alunos', controlador.listar)
 router.post('/controlador',controlador.criar)
 router.put('/alunos/:id' ,controlador.editar)
 router.delete('/alunos/:id', controlador.deletar)

 export const router