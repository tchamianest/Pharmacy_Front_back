import express from "express";
import multerupload from "../utils/multer.js";
import {
  createProduct,
  AllProduct,
  SellerProduct,
} from "../controller/product.controller.js";
import authenticat from "../middleware/userAuthenticate.js";

const productRoute = express.Router();

productRoute.post(
  "/create",
  authenticat,
  multerupload.single("productImage"),
  createProduct
);

productRoute.get("/", AllProduct);
productRoute.get("/medicals", authenticat, SellerProduct);
export default productRoute;
