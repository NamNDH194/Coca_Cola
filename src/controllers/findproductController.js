//const { findProductInStockSchema } = require("../validation/findproductValidation");
const { findProductInStock } = require("../services/findproductService");

const getInStockProducts = async (req, res) => {
  try {
    // validate QUERY, not body
    // const { error, value } = findProductInStockSchema.validate(req.query);

    // if (error) {
    //   return res.status(400).json({ message: error.details[0].message });
    // }

    // const keyword = value.keyword;
    const keyword = req.query.keyword;

    const products = await findProductInStock(keyword);
    return res.json({ data: products });
  } catch (err) {
    console.error("Error getting in-stock products:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getInStockProducts };

