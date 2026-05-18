const express=require('express')
const router=express.Router()
const alumnoController=require('../controllers/alumnoController.js')
router.get('/',alumnoController.list)

module.exports=router