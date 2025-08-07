const { getActiveProducts } = require("../services/productService");
const { getActiveProductsSchema } = require("../validation/productValidation");

exports.getProductsInStock = async (req, res) => {
  try {
    const { error, value } = getActiveProductsSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const min_stock = value.min_stock || 1;
    const products = await getActiveProducts(min_stock);

    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
