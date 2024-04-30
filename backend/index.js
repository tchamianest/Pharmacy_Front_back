import dotenv from "dotenv";
import app from "./app.js";
import { dbConnect } from "./config/db.config.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
  dbConnect();
});

export default app;
