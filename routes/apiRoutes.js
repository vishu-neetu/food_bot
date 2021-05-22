const express = require("express");
const router = express.Router();

const getCustomerData = require("../controllers/customer");
const getOrderSummary = require("../controllers/order");

router.get("/customerData", getCustomerData);
router.get("/orderSummary", getOrderSummary);

module.exports = router;