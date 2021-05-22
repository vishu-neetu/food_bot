const apiJson = require("../data/apiData.json");

const getOrderSummary = (req, res, next) => {
  res.status(200).json({
    success: true,
    restaurant: apiJson.restaurant,
    itemsOrdered: apiJson.items
  });
};

module.exports = getOrderSummary;