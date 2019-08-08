const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const CATEGORY_ROUTER = require('./Router/category-router');
const ROLE_ROUTER = require('./Router/role-router');
const PRODUCT_ROUTER = require('./Router/product-router');
const ADMIN_ROUTER = require('./Router/admin-router');
const ORDER_LINE_ROUTER = require('./Router/order-line-router');
const ORDER_CUSTOMER_ROUTER = require('./Router/order-customer');
const { renderToView }        = require('./utils/original-url');

app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use('/category', CATEGORY_ROUTER);
app.use('/role', ROLE_ROUTER);
app.use('/product', PRODUCT_ROUTER);
app.use('/admin', ADMIN_ROUTER);
app.use('/order-line', ORDER_LINE_ROUTER);
app.use('/order-customer', ORDER_CUSTOMER_ROUTER);


var port = process.env.port || 3000;
const uri = 'mongodb://localhost:27017/salesManager';
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  app.listen(port, function () {
    console.log('working in ' + port);
  })
})

app.get('/', (req, res)=> {
    res.render('login');
})

app.get('/dashboard', (req, res)=> {
    renderToView(req, res, 'index');
})

// //===============================================PRODUCT
// app.post('/get-list-products', async(req, res)=>{
//     try {
//         let listProduct = await PRODUCT_MODELS.findAllProduct();
//         if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
//         return res.json({listProduct});
//     } catch (error) {
//         console.log(error)
//         return res.json({ data:null, message:'cant_get_list_product'}); 
//     }
// })
// app.post('/update-data-product', async(req, res)=>{
//     var idProduct = req.body.idProduct;
//     var dataUpdateProduct = req.body.dataUpdateProduct;
//     try {
//         let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
//         if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
//         return res.json({ status: true, message:'update_seccess' });
//     } catch (error) {
//         console.log(error)
//         return res.json({ status:false, message:'cant_update_product'})
//     }
// })
// app.post('/add-one-product', async(req, res)=>{
//     var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
//     try {
//         let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
//         if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
//         return res.json({ status: true, message:'add_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_add_product'});
//     }
// })
// app.post('/delete-one-product', async(req, res)=>{
//     var { idProduct } = req.body;
//     try {
//         let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
//         if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
//         return res.json({ status: true, message:'delete_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_delete_product'});
//     }
// })
// //===============================================ORDERS
// app.post('/get-list-orders', async(req, res)=>{
//     try {
//         let listProduct = await PRODUCT_MODELS.findAllProduct();
//         if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
//         return res.json({listProduct});
//     } catch (error) {
//         console.log(error);
//         return res.json({ data:null, message:'cant_get_list_product'}); 
//     }
// })
// app.post('/update-data-product', async(req, res)=>{
//     var idProduct = req.body.idProduct;
//     var dataUpdateProduct = req.body.dataUpdateProduct;
//     try {
//         let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
//         if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
//         return res.json({ status: true, message:'update_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_update_product'});
//     }
// })
// app.post('/add-one-product', async(req, res)=>{
//     var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
//     try {
//         let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
//         if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
//         return res.json({ status: true, message:'add_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_add_product'});
//     }
// })
// app.post('/delete-one-product', async(req, res)=>{
//     var { idProduct } = req.body;
//     try {
//         let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
//         if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
//         return res.json({ status: true, message:'delete_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_delete_product' });
//     }
// })
// //===============================================EMLOYEES
// app.post('/get-list-products', async(req, res)=>{
//     try {
//         let listProduct = await PRODUCT_MODELS.findAllProduct();
//         if(!listProduct)  return res.json({ data:null, message:'cant_get_list_product'})
//         return res.json({listProduct});
//     } catch (error) {
//         console.log(error);
//         return res.json({ data:null, message:'cant_get_list_product'}); 
//     }
// })
// app.post('/update-data-product', async(req, res)=>{
//     var idProduct = req.body.idProduct;
//     var dataUpdateProduct = req.body.dataUpdateProduct;
//     try {
//         let statusUpdateProduct = await PRODUCT_MODELS.updateProduct();
//         if(!statusUpdateProduct)  return res.json({ status:false, message:'cant_update_product'})
//         return res.json({ status: true, message:'update_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_update_product'});
//     }
// })
// app.post('/add-one-product', async(req, res)=>{
//     var { nameProduct, price, amount, status, image, categoryName } = req.body.idProduct;
//     try {
//         let statusAddProduct = await PRODUCT_MODELS.addProduct(nameProduct, price, amount, status, image, categoryName);
//         if(!statusAddProduct)  return res.json({ status:false, message:'cant_add_product'});
//         return res.json({ status: true, message:'add_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_add_product'});
//     }
// })
// app.post('/delete-one-product', async(req, res)=>{
//     var { idProduct } = req.body;
//     try {
//         let statusDeleteProduct = await PRODUCT_MODELS.deleteOneProduct(idProduct);
//         if(!statusDeleteProduct)  return res.json({ status:false, message:'cant_delete_product'});
//         return res.json({ status: true, message:'delete_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status:false, message:'cant_delete_product'});
//     }
// })
// //===============================================USERS
// //check-login
// app.post('/check-login',  async(req, res)=> {
//     let { userName, userPassword } = req.body;
//     try {
//         let checkLogin = await USER_MODELS.checkLogin(userName, userPassword);
//         if(!checkLogin) return res.json({ value:0, message:'fail_to_login' });
//             return res.json({ value:1, message:'login_seccess' });
//     } catch (error) {
//         console.log(error);
//         return res.json({ value:0, message:'fail_to_login' });
//     }
    
// })


