import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import "./utils/mongodb.js"; //Database

import auth from "./routes/auth.js";
import generatePDF from "./routes/generatePDF.js";
import Zav_api from "./routes/Zav_api.js";

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// ROUTES
app.use("/api/auth", auth);
app.use("/api", generatePDF);
app.use("/zav", Zav_api);

const Port = process.env.PORT || 8080; //PORT
app.listen(Port, () => console.log(`App running on port ${Port}`));
