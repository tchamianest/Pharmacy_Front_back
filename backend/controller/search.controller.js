import { buildWhereClause } from "../utils/Search.util.js";
import Product from "../models/product.js";

export const searchProducts = async (req, res) => {
  const query = req.query;
  try {
    const whereClause = await buildWhereClause(query);
    const products = await Product.findAll({
      where: whereClause,
    });
    res.json(products);
  } catch (error) {
    res.json({ Error: "Error", message: error.message });
  }
};
