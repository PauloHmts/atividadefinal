const express = require('express')
const musicaRoutes = require('./routes/musicaRoutes.js')

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/musicas', musicaRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})