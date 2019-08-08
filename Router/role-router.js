const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ROLE_MODEL = require('../model/role-model')

router.use(bodyParser.urlencoded({
    extended: false
}))

router.post('/insert', async(req, res) => {
    let { name, key } = req.body;
    let infoRole = await ROLE_MODEL.insert({name, key});
    res.json(infoRole);
});

router.get('/list', async(req, res) => {
    let roles = await ROLE_MODEL.getAll();
    res.json(roles);
})

router.post('/update/:roleID', async(req, res) => {
    let { name, key } = req.body;
    let { roleID } = req.params;
    let infoRole = await ROLE_MODEL.updateByID({ roleID, name, key });
    res.json(infoRole);
})

router.post('/update-status/:roleID', async(req, res) => {
    let { status } = req.body;
    let { roleID } = req.params;
    let infoRole = await ROLE_MODEL.updateStatusByID({ roleID, status });
    res.json(infoRole);
})

module.exports = router;