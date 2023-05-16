const express = require('express');
import homeControllers from "../controllers/homeController";

const router = express.Router();

router.get("/", homeControllers.getHomePage);
router.get("/get-crud", homeControllers.getCRUD);
router.post("/create-crud", homeControllers.createCRUD);
router.get("/read-crud", homeControllers.readCRUD);
router.get("/update-crud", homeControllers.getUpdateCRUD);
router.post("/update-crud", homeControllers.postUpdateCRUD);
router.get("/delete-crud", homeControllers.deleteCRUD);


module.exports = router;