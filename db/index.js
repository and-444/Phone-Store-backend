const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRoute");
const questionRouter = require("./routes/questionRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/question", questionRouter);
app.use("/order", orderRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3gph4cs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
