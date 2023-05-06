import express from "express";
import homeControllers from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeControllers.getHomePage);
    router.get("/get-crud", homeControllers.getCRUD);
    router.post("/create-crud", homeControllers.createCRUD);
    router.get("/read-crud", homeControllers.readCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;
