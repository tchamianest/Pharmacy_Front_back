import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../config/db.config.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      defaultValue: "",
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    preferredLanguage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferredCurrency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whereYouLive: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billingAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "buyer",
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
    tableName: "users",
  }
);

export default User;
