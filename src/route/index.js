import apiRoute from "./apiRoute";
import webRoute from "./webRoute";

const initWebRoutes = (app) => {
    app.use("/api", apiRoute);
    app.use("/", webRoute);
}

module.exports = initWebRoutes;
