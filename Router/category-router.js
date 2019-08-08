const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const CATEGORY_MODEL = require('../model/category-model')
const { renderToView }        = require('../utils/original-url');
router.get('/insert', (req, res) => {
    renderToView(req, res, 'insert-category');
})

router.post('/insert', async(req, res) => {
    let { name } = req.body;
    let infoCategory = await CATEGORY_MODEL.insert(name);
    res.json(infoCategory);
});

router.get('/list', async(req, res) => {
    let categories = await CATEGORY_MODEL.getAll();
    renderToView(req, res, 'list-category', { categories: categories.data })
})

router.post('/update/:categoryID', async(req, res) => {
    let { name } = req.body;
    let { categoryID } = req.params;
    let infoCategory = await CATEGORY_MODEL.updateByID({ categoryID, name });
    res.json(infoCategory);
})

router.post('/update-status/:categoryID', async(req, res) => {
    let { status } = req.body;
    let { categoryID } = req.params;
    let infoCategory = await CATEGORY_MODEL.updateStatusByID({ categoryID, status });
    res.json(infoCategory);
})


module.exports = router;