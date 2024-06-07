import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "./config/passport.config.js";
import dotenv from "dotenv";
import users from "./routes/users.routes.js";
import productRoute from "./routes/product.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    Welcome: "you are welcome to the pharmacy that combine different pharmacy",
  });
});
app.use("/api/users", users);
app.use("/api/product", productRoute);
export default app;
