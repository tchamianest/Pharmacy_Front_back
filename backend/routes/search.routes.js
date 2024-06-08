import express from "express";
import { searchProducts } from "../controller/search.controller.js";

const searchRoutes = express.Router();

searchRoutes.get("/", searchProducts);

export default searchRoutes;
