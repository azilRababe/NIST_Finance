import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import "./utils/mongodb.js"; //Database

import auth from "./Routes/auth.js";

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// ROUTES
app.use("/auth", auth);

const Port = process.env.PORT || 8080; //PORT
app.listen(Port, () => console.log(`App running on port ${Port}`));

// import morgan from "morgan";
// app.use(morgan("common"));
