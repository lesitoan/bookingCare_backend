const express = require('express');
import doctorController from "../controllers/doctorController";

const router = express.Router();

router.get('/top-doctor', doctorController.getTopDoctor);
router.get('/doctors', doctorController.getAllDoctors);
router.post('/doctor-infor-markdown', doctorController.postInfoDoctorMarkdown);
router.get('/doctor-detail/:doctorId', doctorController.getDetailDoctor);
router.post('/doctor-infor', doctorController.postInfoDoctor);

module.exports = router;