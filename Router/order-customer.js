const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ORDER_CUSTOMER_MODEL = require('../model/order-customer-model');
const { renderToView } = require('../utils/original-url');
router.use(bodyParser.urlencoded({
    extended: false
}))
router.get('/insert', (req, res)=>{
    renderToView(req, res, 'insert-order-customer');
})
router.post('/insert', async(req, res) => {
    let { customerName, orderLineID } = req.body;
    let infoOrderCustomer = await ORDER_CUSTOMER_MODEL.insert({ customerName, orderLineID });
    res.json(infoOrderCustomer);
});

router.get('/list', async(req, res) => {
    let orderCustomer = await ORDER_CUSTOMER_MODEL.getAll();
    res.json(orderCustomer);
})

module.exports = router;