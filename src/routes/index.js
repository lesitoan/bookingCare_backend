import apiRoute from "./apiRoute";

const initWebRoutes = (app) => {
    app.use("/api", apiRoute);
}

module.exports = initWebRoutes;
