const pool = require('../config/db.js')

async function listar(req, res) {
    try{
        const [rows] = await pool.query('SELECT * FROM musica')
        res.json(rows)
    }catch (error){
        res.status(500).json({erro: 'Erro ao buscar musicas', detalhe: error.message})
    }
    
}

module.exports = {listar}