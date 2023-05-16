import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/index";
import connectDB from "./config/connectDB";

const app = express();
const upload = multer();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'COntent-type');
    next();
})

viewEngine(app);
initWebRoutes(app);
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Connect successfully !!!");
});

// test