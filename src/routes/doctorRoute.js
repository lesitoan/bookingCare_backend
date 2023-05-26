const express = require('express');
import doctorController from "../controllers/doctorController";

const router = express.Router();

router.get('/top-doctor', doctorController.getTopDoctor);
router.get('/doctors', doctorController.getAllDoctors);
router.post('/info-doctor', doctorController.postInfoDoctor);
router.get('/doctor-detail/:doctorId', doctorController.getDetailDoctor);

module.exports = router;