const objectID = require('mongoose').Types.ObjectId;
//DB
var ADMIN_COLL = require('../db/admin');
module.exports = {

    insert : ({ fullname, username, password, roleID }) => {
        return new Promise( async resolve =>{
            try {
                if(!objectID.isValid(roleID))
                    return resolve({ error: true, message: 'params is not valid' });

                let adminTemp = new ADMIN_COLL({
                    fullname, username, password, roleID
                })
                let infoAdmin = await adminTemp.save();
                if(!infoAdmin)
                    return resolve({ error: true, message: 'cannot_insert' });
                return resolve({ error: false, data: infoAdmin })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    getAll: () => {
        return new Promise( async resolve => {
            try {
                let admin = await ADMIN_COLL.find({ });
                if(!admin)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: admin });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    updateByID : ({ adminID, fullname, username, password, roleID }) => {
        return new Promise( async resolve => {
            try {
                let infoAdminAfterUpdate = await ADMIN_COLL.findByIdAndUpdate(adminID, {
                    fullname, username, password, roleID
                }, { new: true });
                if(!infoAdminAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoAdminAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    updateStatusByID : ({ adminID, status }) => {
        return new Promise( async resolve => {
            try {
                let infoAdminAfterUpdate = await ADMIN_COLL.findByIdAndUpdate(adminID, {
                    status
                }, { new: true });
                if(!infoAdminAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoAdminAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },
   
    removeByID : (adminID) =>{
        return new Promise(async resolve => {
            try {
                let infoAdminAfterRemove = await ADMIN_COLL.findByIdAndDelete(categoryID);
                if(!infoAdminAfterRemove)
                    return resolve({ error: true, message: 'cannot_remove' });
                return resolve({ error: true, data: infoAdminAfterRemove });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}


