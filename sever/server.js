import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import "./utils/mongodb.js"; //Database

import auth from "./Controllers/auth.js";
import handleZav from "./Controllers/handleZav.js";
import user from "./Controllers/user.js";

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// ROUTES
app.use("/api/auth", auth);
app.use("/api", handleZav);
app.use("/api", user);

const Port = process.env.PORT || 8080; //PORT
app.listen(Port, () => console.log(`App running on port ${Port}`));
