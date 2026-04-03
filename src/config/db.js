const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '136.248.68.66',
    user: 'remoto',
    password: '230890',
    database: 'aula4comp',
    waitForConnections: true,
    connectionLimit: 10,
})

module.exports = pool