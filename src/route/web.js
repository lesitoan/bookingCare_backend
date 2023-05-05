import express from "express";
import homeControllers from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeControllers.getHomePage);
    router.get("/crud", homeControllers.getCRUD);
    router.get("/crud", homeControllers.getCRUD);
    router.post("/crud", homeControllers.postCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;
