const Product = require("../models/Product");

const productRender = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.json("Ошибка при создании продукта");
  }
};

module.exports = { productRender };
