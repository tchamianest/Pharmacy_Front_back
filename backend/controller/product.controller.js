import Product from "../models/product.js";

export const createProduct = (req, res) => {
  try {
    //   const user = req.user;
    //   const { productName, productDesciption, price, stockLever } = req.body;
    console.log(req.body);
    res.status(200).json({ body: req.body });
  } catch (error) {}
};
