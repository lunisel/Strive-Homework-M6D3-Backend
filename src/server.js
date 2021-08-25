import express from "express";
import cors from "cors";
import db from "./db/models/index.js";
import productRouter from "./services/products/index.js";
import reviewRouter from "./services/reviews/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/products", productRouter);
app.use("/review", reviewRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
    app.on("error", (error) => console.log(`Server is faild : ${error}`));
  })
  .catch((e) => console.log(e));
