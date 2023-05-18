
const express = require('express');
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

const router = express.Router();

//-----User----
router.post("/login", userController.handleLoginUser);
router.get("/users/:id", userController.handleGetUser);
router.get("/users", userController.handleGetUser);
router.put("/update-user/:id", userController.handleUpdateUser);
router.post("/create-user", userController.handleCreateUser);
router.delete("/delete-user/:id", userController.handleDeleteUser);

//-----Other----
router.get('/allcode/:type', userController.handleAllCode);
router.get('/top-doctor', doctorController.getTopDoctor);
router.get('/doctors', doctorController.getAllDoctors);
router.post('/info-doctor', doctorController.postInfoDoctor);

module.exports = router;