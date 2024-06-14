const Router = require("express");
const router = new Router();

const { productRender } = require("../controllers/product");

router.get("/render", productRender);

module.exports = router;
