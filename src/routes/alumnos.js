const express=require('express')
const router=express.Router()
const alumnoController=require('../controllers/alumnoController.js')

router.get('/',alumnoController.list)
router.post('/add',alumnoController.save)
router.get('/delete/:id_estudiante', alumnoController.delete)
router.get('/update/:id_estudiante', alumnoController.edit)
router.post('/update/:id_estudiante', alumnoController.update)

module.exports=router