const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ADMIN_MODEL = require('../model/admin-model')

router.use(bodyParser.urlencoded({
    extended: false
}))

router.post('/insert', async(req, res) => {
    let { fullname, username, password, roleID } = req.body;
    let infoProduct = await ADMIN_MODEL.insert({ fullname, username, password, roleID });
    res.json(infoProduct);
});

router.get('/list', async(req, res) => {
    let admins = await ADMIN_MODEL.getAll();
    res.json(admins);
})

router.post('/update/:adminID', async(req, res) => {
    let { fullname, username, password, roleID } = req.body;
    let { adminID } = req.params;
    let infoAdmin = await ADMIN_MODEL.updateByID({ adminID, fullname, username, password, roleID });
    res.json(infoAdmin);
})

router.post('/update-status/:adminID', async(req, res) => {
    let { status } = req.body;
    let { adminID } = req.params;
    let infoCategory = await ADMIN_MODEL.updateStatusByID({ adminID, status });
    res.json(infoCategory);
})

module.exports = router;