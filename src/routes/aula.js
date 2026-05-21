const express = require('express');
const router = express.Router();
const aulaController = require('../controllers/aulaController');

router.get('/aula', aulaController.list);
router.post('/aula/add', aulaController.save);
router.get('/aula/delete/:id_aula', aulaController.delete);
router.get('/aula/edit/:id_aula', aulaController.edit);
router.post('/aula/update/:id_aula', aulaController.update);

module.exports = router;
