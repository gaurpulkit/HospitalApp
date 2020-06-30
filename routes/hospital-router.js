const express = require('express')

const HCtrl = require('../controllers/hospital-ctrl')

const router = express.Router()

router.get('/hospital/', HCtrl.start)
router.get('/hospital/p/', HCtrl.patient)
router.get('/hospital/d/', HCtrl.doctor)
router.get('/hospital/p/:id', HCtrl.getPById)
router.get('/hospital/d/:id', HCtrl.getDById)

module.exports = router