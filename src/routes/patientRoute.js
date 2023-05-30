const express = require('express');
const patientController = require('../controllers/patientController')

const router = express.Router();
router.post('/patient-booking-appointment', patientController.postPatientBooking)

module.exports = router;