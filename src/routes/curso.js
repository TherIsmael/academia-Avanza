const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/curso', cursoController.list);
router.post('/curso/add', cursoController.save);
router.get('/curso/delete/:id_curso', cursoController.delete);
router.get('/curso/edit/:id_curso', cursoController.edit);
router.post('/curso/update/:id_curso', cursoController.update);

module.exports = router;
