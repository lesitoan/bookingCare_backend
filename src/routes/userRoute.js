const express = require('express');
import userController from "../controllers/userController";

const router = express.Router();

router.post("/login", userController.handleLoginUser);
router.get("/users/:id", userController.handleGetUser);
router.get("/users", userController.handleGetUser);
router.put("/update-user/:id", userController.handleUpdateUser);
router.post("/create-user", userController.handleCreateUser);
router.delete("/delete-user/:id", userController.handleDeleteUser);

module.exports = router;
