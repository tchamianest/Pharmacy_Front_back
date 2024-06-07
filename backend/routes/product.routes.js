import express from "express";
import multerupload from "../utils/multer.js";
import { createProduct } from "../controller/product.controller.js";

import authenticat from "../middleware/userAuthenticate.js";

const productRoute = express.Router();

productRoute.post("/create", createProduct);

export default productRoute;
