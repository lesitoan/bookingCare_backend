const express = require('express');
import otherController from "../controllers/OtherController";

const router = express.Router();

router.get('/allcode/:type', otherController.handleAllCode);
router.post('/bulk-create-schedule', otherController.bulkCreateSchedule);
router.get('/schedule', otherController.getScheduleByDate);
router.post('/create-specialty', otherController.createSpecialty);

module.exports = router;
