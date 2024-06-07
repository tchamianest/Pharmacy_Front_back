import { DataTypes, UUIDV4, Model } from "sequelize";
import { sequelizeConnection } from "../config/db.config.js";

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sellerId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      validate: {
        notEmpty: true,
      },
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    isAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    productPrice: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },

    productDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    productPictures: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "products",
  }
);

export default Product;
