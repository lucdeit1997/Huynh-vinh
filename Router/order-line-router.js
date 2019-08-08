const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ORDER_LINE_MODEL = require('../model/order-line-model')

router.use(bodyParser.urlencoded({
    extended: false
}))

router.post('/insert', async(req, res) => {
    let { productID, quantity } = req.body;
    let infoOrderLine = await ORDER_LINE_MODEL.insert({ productID, quantity });
    res.json(infoOrderLine);
});

module.exports = router;