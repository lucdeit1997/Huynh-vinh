var express = require('express');
var mongoose = require('mongoose');
//DB
var USER_COLL = require('./db/user');
var PRODUCT_COLL = require('./db/product');
//MODEL
var PRODUCT_MODELS = require('./model/product-model');
var USER_MODELS = require('./model/user-model');
//
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
var port = process.env.port || 8080;
const uri = 'mongodb://localhost:27017/salesManager';
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  app.listen(port, function () {
    console.log('working in ' + port);
  })
})
app.get('/',  (req, res)=> {
    res.render('login');
})  
app.get('/dashboard',  (req, res)=> {
    res.render('./template/dashboard/index');
})  
//===============================================PRODUCT
app.post('/get-list-products', async(req, res)=>{
    try {
        let listProduct = await PRODUCT_MODELS.findAllProduct();
        if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
        return res.json({listProduct});
    } catch (error) {
        console.log(error)
        return res.json({ data:null, message:'cant_get_list_product'}); 
    }
})
app.post('/update-data-product', async(req, res)=>{
    var idProduct = req.body.idProduct;
    var dataUpdateProduct = req.body.dataUpdateProduct;
    try {
        let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
        if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
        return res.json({ status: true, message:'update_seccess' });
    } catch (error) {
        console.log(error)
        return res.json({ status:false, message:'cant_update_product'})
    }
})
app.post('/add-one-product', async(req, res)=>{
    var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
    try {
        let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
        if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
        return res.json({ status: true, message:'add_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_add_product'});
    }
})
app.post('/delete-one-product', async(req, res)=>{
    var { idProduct } = req.body;
    try {
        let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
        if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
        return res.json({ status: true, message:'delete_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_delete_product'});
    }
})
//===============================================ORDERS
app.post('/get-list-orders', async(req, res)=>{
    try {
        let listProduct = await PRODUCT_MODELS.findAllProduct();
        if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
        return res.json({listProduct});
    } catch (error) {
        console.log(error)
        return res.json({ data:null, message:'cant_get_list_product'}); 
    }
})
app.post('/update-data-product', async(req, res)=>{
    var idProduct = req.body.idProduct;
    var dataUpdateProduct = req.body.dataUpdateProduct;
    try {
        let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
        if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
        return res.json({ status: true, message:'update_seccess' });
    } catch (error) {
        console.log(error)
        return res.json({ status:false, message:'cant_update_product'})
    }
})
app.post('/add-one-product', async(req, res)=>{
    var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
    try {
        let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
        if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
        return res.json({ status: true, message:'add_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_add_product'});
    }
})
app.post('/delete-one-product', async(req, res)=>{
    var { idProduct } = req.body;
    try {
        let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
        if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
        return res.json({ status: true, message:'delete_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_delete_product'});
    }
})
//===============================================EMLOYEES
app.post('/get-list-products', async(req, res)=>{
    try {
        let listProduct = await PRODUCT_MODELS.findAllProduct();
        if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
        return res.json({listProduct});
    } catch (error) {
        console.log(error)
        return res.json({ data:null, message:'cant_get_list_product'}); 
    }
})
app.post('/update-data-product', async(req, res)=>{
    var idProduct = req.body.idProduct;
    var dataUpdateProduct = req.body.dataUpdateProduct;
    try {
        let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
        if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
        return res.json({ status: true, message:'update_seccess' });
    } catch (error) {
        console.log(error)
        return res.json({ status:false, message:'cant_update_product'})
    }
})
app.post('/add-one-product', async(req, res)=>{
    var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
    try {
        let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
        if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
        return res.json({ status: true, message:'add_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_add_product'});
    }
})
app.post('/delete-one-product', async(req, res)=>{
    var { idProduct } = req.body;
    try {
        let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
        if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
        return res.json({ status: true, message:'delete_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ status:false, message:'cant_delete_product'});
    }
})
//===============================================USERS
//check-login
app.post('/check-login',  async(req, res)=> {
    let { userName, userPassword } = req.body;
    try {
        let checkLogin = await USER_MODELS.checkLogin(userName, userPassword);
        if(!checkLogin) return res.json({ value:0, message:'fail_to_login' });
            return res.json({ value:1, message:'login_seccess' });
    } catch (error) {
        console.log(error);
        return res.json({ value:0, message:'fail_to_login' });
    }
    
})


