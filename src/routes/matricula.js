const express = require('express');
const router = express.Router();

const matriculaController = require('../controllers/matriculaController');

router.get('/matricula', matriculaController.list);

router.post('/matricula/add', matriculaController.save);

router.get('/matricula/delete/:id_matricula', matriculaController.delete);

router.get('/matricula/edit/:id_matricula', matriculaController.edit);

router.post('/matricula/update/:id_matricula', matriculaController.update);

module.exports = router;