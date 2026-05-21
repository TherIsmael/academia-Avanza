const express = require('express')
const router = express.Router()
const alumnoController = require('../controllers/alumnoController.js')

router.get('/alumno', alumnoController.list)
router.post('/alumno/add', alumnoController.save)
router.get('/alumno/delete/:id_estudiante', alumnoController.delete)
router.get('/alumno/update/:id_estudiante', alumnoController.edit)
router.post('/alumno/update/:id_estudiante', alumnoController.update)

module.exports = router
