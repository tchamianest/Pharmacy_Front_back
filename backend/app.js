import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport, { session } from "./config/passport.config";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

export default app;
