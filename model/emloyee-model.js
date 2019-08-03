var mongoose = require('mongoose');
//DB
var PRODUCT_COLL = require('../db/product');
module.exports = {
    findAllProduct: async function (){
        try {
            let dataListProduct = await PRODUCT_COLL.find({});
            if(!dataListProduct) return null;
            return dataListProduct
        } catch (error) {
            return null;
        }
     },
    updateProduct : async function(idProduct, dataProduct){
        try {
            let statusUpdate = await PRODUCT_COLL.findByIdAndUpdate(idProduct,
                {  productName: dataProduct.name,
                   image: dataProduct.image,
                   status:dataProduct.status,
                   price:dataProduct.price,
                   amount:dataProduct.amount
                }, { new: true });
           if(!statusUpdate) return false;
           return true;
        } catch (error) {
            console.log(error);
            return false;
        }
       
    },
    addProduct : async function(nameProduct, price, amount, status, image, category){
        try {
                var inforProduct = PRODUCT_COLL({
                    nameProduct,
                    price, 
                    amount, 
                    status, 
                    image, 
                    category
                });
                let statusAddProduct = await inforProduct.save();
           if(!statusAddProduct) return false;
           return true;
        } catch (error) {
            console.log(error);
            return false;
        }
       
    },
    deleteOneProduct : async function(idProduct){
        try {
                let statusDeleteProduct = await PRODUCT_COLL.deleteOne({ '_id':idProduct })
                if(!statusDeleteProduct) return false;
                return true;
        } catch (error) {
            console.log(error);
            return false;
        }
       
    }
}


