const express = require('express')
const router = express.Router()
const disciplinaController = require('../controllers/disciplinaController.js')

router.get('/', disciplinaController.listar)

module.exports = router