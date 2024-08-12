import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

let db_uri = "";
const APP_MODE = (process.env.DEV_MODE ) || "development";
const DB_HOST_MODE= process.env.DB_HOST_TYPE;

let dialect_option;

switch (APP_MODE) {
  case "test":
    db_uri = process.env.DB_TEST ;
    break;

  case "production":
    db_uri = process.env.DB_PROD ;
    break;
  default:
    db_uri = process.env.DB_DEV ;
    break;
}

DB_HOST_MODE === "local"
  ? (dialect_option = {})
  : (dialect_option = {
      ssl: {
        require: true,
        rejectUnauthorized: true
      }
    });

export const sequelizeConnection= new Sequelize(db_uri, {
  dialect: "postgres",
  dialectOptions: dialect_option,
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
export const sequelizeDbConfig= sequelizeConnection.config;

export const dbConnect = () =>
  sequelizeConnection
    .authenticate()
    .then(async () => {
      console.log("Database connected successfully.", db_uri);
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    });
