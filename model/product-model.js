var mongoose = require('mongoose');
//DB
var PRODUCT_COLL = require('../db/product');
module.exports = {

    insert : ({ name, description, price, image, category }) => {
        return new Promise( async resolve =>{
            try {
                let productTemp = new PRODUCT_COLL({
                    name, description, price, image, category
                })
                let infoProduct = await productTemp.save();
                if(!infoProduct)
                    return resolve({ error: true, message: 'cannot_get_info' });
                return resolve({ error: false, data: infoProduct })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    getAll : () => {
        return new Promise( async resolve => {
            try {
                let products = await PRODUCT_COLL.find({ }).populate('category');
                if(!products)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: products });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    getInfoByID : (productID) => {
        return new Promise( async resolve => {
            try {
                let products = await PRODUCT_COLL.findOne({ _id: productID }).populate('category');
                if(!products)
                    return resolve({ error: true, message: 'cannot_get_info' });
                return resolve({ error: false, data: products });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    updateByID : ({ productID, name, description, price, image, category }) => {
        return new Promise( async resolve => {
            try {
                let infoProductAfterUpdate = await PRODUCT_COLL.findByIdAndUpdate(productID, {
                    name, description, price, image, category
                }, { new: true });
                if(!infoProductAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoProductAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    updateStatusByID : ({ productID, status }) => {
        return new Promise( async resolve => {
            try {
                let infoProductAfterUpdate = await PRODUCT_COLL.findByIdAndUpdate(productID, {
                   status
                }, { new: true });
                if(!infoProductAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoProductAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },
   
    removeByID : (productID) =>{
        return new Promise(async resolve => {
            try {
                let infoProductAfterRemove = await PRODUCT_COLL.findByIdAndDelete(productID);
                if(!infoProductAfterRemove)
                    return resolve({ error: true, message: 'cannot_remove' });
                return resolve({ error: true, data: infoProductAfterRemove });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}


