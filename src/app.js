import express from 'express'
import { alunosRoutes } from './rotas/alunos.js'
import { professoresRoutes } from './rotas/professor.js'
import { disciplinas } from './dados/db.js'
import { disciplinasRoutes } from './rotas/diciplinas.js'
import { cursosRoutes } from './rotas/cursos.js'

const app = express ()
app.use(express.json())
app.use(alunosRoutes)
app.use(professoresRoutes)
app.use(disciplinasRoutes)
app.use(cursosRoutes)

export default app