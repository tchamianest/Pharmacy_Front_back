import { Op } from "sequelize";
import Sequelize from "sequelize";

export const buildWhereClause = async (queryParams) => {
  const { name } = queryParams;
  const whereClause = {};

  if (name) {
    const nameKeywords = name.split(" ");

    const searchConditions = nameKeywords.map((keyword) => ({
      [Op.or]: [
        Sequelize.where(
          Sequelize.fn("similarity", Sequelize.col("productName"), keyword),
          { [Op.gt]: 0.3 }
        ),
        Sequelize.where(
          Sequelize.fn(
            "similarity",
            Sequelize.col("productDescription"),
            keyword
          ),
          { [Op.gt]: 0.3 }
        ),
        {
          productName: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        {
          productDescription: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ],
    }));

    whereClause[Op.or] = [
      ...searchConditions,
      {
        productName: {
          [Op.iLike]: `%${name}%`,
        },
      },
      {
        productDescription: {
          [Op.iLike]: `%${name}%`,
        },
      },
    ];
  }

  return whereClause;
};
