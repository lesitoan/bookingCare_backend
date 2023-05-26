import doctorRoute from './doctorRoute';
import userRoute from './userRoute';
import otherRoute from './otherRoute';

const initWebRoutes = (app) => {
    app.use("/api", doctorRoute);
    app.use("/api", userRoute);
    app.use("/api", otherRoute);
}

module.exports = initWebRoutes;
