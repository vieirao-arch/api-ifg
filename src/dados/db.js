import mysql from 'mysql2/promise'
const banco = await mysql.createConnection({
    host:'escola-ifg-escola-ifg.f.aivencloud.com',
    port:10556,
    user:'avnadmin',
    password:'',
    database:'escola'
    ssl:(
        rejectUnauthorrized: false
    )
})
export default banco

const professor = []
const discoplinas = []
const cursos = []
const turmar = []
export ( professores , disciplinas , cursos, turmas )