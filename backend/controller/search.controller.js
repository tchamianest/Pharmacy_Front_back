import { buildWhereClause } from "../utils/Search.util.js";
import Product from "../models/product.js";
import { Sequelize } from "sequelize";
import User from "../models/user.js";

export const searchProducts = async (req, res) => {
  const query = req.query;
  try {
    const whereClause = await buildWhereClause(query);
    const locationName = query.locationName;
    let order = [["createdAt", "DESC"]];

    if (locationName) {
      const locationKeywords = locationName
        .split(" ")
        .map((keyword) => keyword.trim());

      const locationOrderClause = Sequelize.literal(
        locationKeywords
          .map(
            (keyword) => `(
          CASE WHEN "locationName" ILIKE '%${keyword}%' THEN 1 ELSE 0 END
        )`
          )
          .join(" + ") + " DESC"
      );

      order = [locationOrderClause, ...order];
    }
    const products = await Product.findAll({
      where: whereClause,
      order: order,
      include: {
        model: User,
        as: "seller",
        attributes: ["id", "firstName", "lastName", "email"],
      },
    });
    res.json(products);
  } catch (error) {
    res.json({ Error: "Error", message: error.message });
  }
};
