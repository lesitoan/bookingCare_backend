
const express = require('express');
import userController from "../controllers/apiController/userController";
import doctorController from "../controllers/apiController/doctorController";

const router = express.Router();

router.post("/login", userController.handleLoginUser);
router.get("/users/:id", userController.handleGetUser);
router.get("/users", userController.handleGetUser);
router.put("/update-user/:id", userController.handleUpdateUser);
router.post("/create-user", userController.handleCreateUser);
router.delete("/delete-user/:id", userController.handleDeleteUser);
router.get('/allcode/:type', userController.handleAllCode);

router.get('/top-doctor-home', doctorController.getTopDoctorHome);

module.exports = router;