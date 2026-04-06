const express = require('express')
const router = express.Router()
const musicaController = require('../controllers/musicaController.js')

router.get('/', musicaController.listar)

module.exports = router