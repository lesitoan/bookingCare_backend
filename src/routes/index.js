import doctorRoute from './doctorRoute';
import userRoute from './userRoute';
import otherRoute from './otherRoute';
import patientRoute from './patientRoute';

const initWebRoutes = (app) => {
    app.use("/api", doctorRoute);
    app.use("/api", userRoute);
    app.use("/api", otherRoute);
    app.use("/api", patientRoute);
}

module.exports = initWebRoutes;
