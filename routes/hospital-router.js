const express = require('express')

const HCtrl = require('../controllers/hospital-ctrl')

const router = express.Router()

router.get('/', HCtrl.start)
router.get('/patient', HCtrl.patient)
router.get('/doctor', HCtrl.doctor)
router.get('/patient/:id', HCtrl.getPById)
router.get('/doctor/:id', HCtrl.getDById)

module.exports = router