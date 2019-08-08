const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const PRODUCT_MODEL = require('../model/product-model');
const CATEGORY_MODEL = require('../model/category-model');
const { upload } = require('../utils/configMulter.js');
const { renderToView }        = require('../utils/original-url');

router.use(bodyParser.urlencoded({
    extended: false
}))

router.get('/insert', async(req, res) => {
    let categories = await CATEGORY_MODEL.getCategoriesByStatus(1);
    renderToView(req, res, 'insert-product', { 
        product: null,
        categories: categories.data 
    });
});

router.post('/insert', upload.single('image'), async(req, res) => {
    let { name, description, price, category } = req.body;
    let imageName = null;
    if(req.file){
        imageName = req.file.filename;
    }else{
        imageName = ""
    }
    let infoProduct = await PRODUCT_MODEL.insert({ name, description, price, image: imageName, category });
    if(!infoProduct.error)
        res.redirect('list');
});

router.get('/list', async(req, res) => {
    let products = await PRODUCT_MODEL.getAll();
    renderToView(req, res, 'list-product', { products: products.data });
})

router.get('/update/:productID', async(req, res) => {
    let { productID } = req.params;
    let infoProduct = await PRODUCT_MODEL.getInfoByID(productID);
    let categories = await CATEGORY_MODEL.getCategoriesByStatus(1);

    renderToView(req, res, 'insert-product', { 
        product: infoProduct.data,
        categories: categories.data
    });
})

router.post('/update/:productID', async(req, res) => {
    let { name, description, status, price, image, category } = req.body;
    let { productID } = req.params;
    let infoProduct = await PRODUCT_MODEL.updateByID({ productID, name, description, status, price, image, category });
    res.json(infoProduct);
})

router.get('/update-status/:productID/:status', async(req, res) => {
    let { productID, status } = req.params;
    let infoCategory = await PRODUCT_MODEL.updateStatusByID({ productID, status });
    res.redirect('/product/list');
})

module.exports = router;