const ORDER_LINE_COLL = require('../db/order-line');
const objectID        =  require('mongoose').Types.objectID;
module.exports = {

    insert : ({ productID, quantity }) => {
        return new Promise( async resolve =>{
            try {
                if(!objectID.isValid(productID))
                    return resolve({ error: true, message: 'params is not valid' })
                let orderLineTemp = new ORDER_LINE_COLL({
                    product: productID, quantity
                })
                let infoOrdeLine = await orderLineTemp.save();
                if(!infoOrdeLine)
                    return resolve({ error: true, message: 'cannot_insert' });
                return resolve({ error: false, data: infoOrdeLine })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }, 

    updateByID : ( orderLineID, productID, quantity ) => {
        return new Promise( async resolve => {
            try {
                let infoOrderLineAfterUpdate = await ORDER_LINE_COLL.findByIdAndUpdate(orderLineID, {
                    product : productID, quantity 
                }, { new: true });
                if(!infoOrderLineAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoOrderLineAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },
   
    removeByID : (orderLineID) =>{
        return new Promise(async resolve => {
            try {
                let infoOrderLineAfterRemove = await ORDER_LINE_COLL.findByIdAndDelete(orderLineID);
                if(!infoOrderLineAfterRemove)
                    return resolve({ error: true, message: 'cannot_remove' });
                return resolve({ error: true, data: infoOrderLineAfterRemove });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}


