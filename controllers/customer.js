const apiJson = require("../data/apiData.json");

const getCustomerData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: apiJson.user
  });
};

module.exports = getCustomerData;