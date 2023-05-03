import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

viewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Connect successfully !!!");
});