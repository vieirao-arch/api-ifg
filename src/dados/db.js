import mysql from 'mysql2/promise'
const banco = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'escola'
})
export default banco
