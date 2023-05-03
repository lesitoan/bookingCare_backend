import express from "express";
import homeControllers from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeControllers.getHomePage);
    return app.use("/", router);
}

module.exports = initWebRoutes;
