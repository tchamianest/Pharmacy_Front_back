import dotenv from "dotenv";
import app from "./app";
import { dbConnect } from "./config/db.config";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
  dbConnect();
});

export default app;
