const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();
router.post('/patient-booking-appointment', patientController.postPatientBooking);
router.get('/verify-booking-appointment', patientController.verifyPatientBooking);

module.exports = router;