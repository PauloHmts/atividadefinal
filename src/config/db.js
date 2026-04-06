const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '163.176.182.35',
    user: 'remoto',
    password: '230890',
    database: 'atividadefinal',
    waitForConnections: true,
    connectionLimit: 10,
})

module.exports = pool