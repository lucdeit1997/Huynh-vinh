const ORDER_CUSTOMRER_COLL = require('../db/order-line');
const objectID             =  require('mongoose').Types.objectID;
module.exports = {

    insert : ({ customerName, orderLineID }) => {
        return new Promise( async resolve =>{
            try {
                if(!objectID.isValid(orderLineID))
                    return resolve({ error: true, message: 'params is not valid' })
                let orderCustomerTemp = new ORDER_CUSTOMRER_COLL({
                    customerName, orderLine: orderLineID
                })
                let infoOrdeLine = await orderCustomerTemp.save();
                if(!infoOrdeLine)
                    return resolve({ error: true, message: 'cannot_insert' });
                return resolve({ error: false, data: infoOrdeLine })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }, 

    getInfoByID : ( orderLineID) =>{
        return new Promise( async resolve =>{
            try {
                if(!objectID.isValid(orderLineID))
                    return resolve({ error: true, message: 'params is not valid' })
                
                let infoOrdeLine = await ORDER_CUSTOMRER_COLL.findOne({ '_id': orderLineID });
                if(!infoOrdeLine)
                    return resolve({ error: true, message: 'cannot_get_info' });
                return resolve({ error: false, data: infoOrdeLine })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    getAll : () =>{
        return new Promise( async resolve =>{
            try {
                let orderCustomers = await ORDER_CUSTOMRER_COLL.find({});
                if(!orderCustomers)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: orderCustomers })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    // updateByID : ( orderLineID, productID, quantity ) => {
    //     return new Promise( async resolve => {
    //         try {
    //             let infoOrderLineAfterUpdate = await ORDER_CUSTOMRER_COLL.findByIdAndUpdate(orderLineID, {
    //                 product : productID, quantity 
    //             }, { new: true });
    //             if(!infoOrderLineAfterUpdate)
    //                 return resolve({ error: true, message: 'cannot_update' });
    //             return resolve({ error: false, data: infoOrderLineAfterUpdate });
    //         } catch (error) {
    //             return resolve({ error: true, message: error.message })
    //         }
    //     })
    // },
   
    // removeByID : (orderLineID) =>{
    //     return new Promise(async resolve => {
    //         try {
    //             let infoOrderLineAfterRemove = await ORDER_CUSTOMRER_COLL.findByIdAndDelete(orderLineID);
    //             if(!infoOrderLineAfterRemove)
    //                 return resolve({ error: true, message: 'cannot_remove' });
    //             return resolve({ error: true, data: infoOrderLineAfterRemove });
    //         } catch (error) {
    //             return resolve({ error: true, message: error.message });
    //         }
    //     })
    // }
}


