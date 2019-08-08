//DB
var ROLE_COLL = require('../db/role');
module.exports = {
    insert : ({ name, key }) => {
        return new Promise( async resolve =>{
            try {
                let roleTemp = new ROLE_COLL({
                    name, key
                })
                let infoCategory = await roleTemp.save();
                if(!infoCategory)
                    return resolve({ error: true, message: 'cannot_insert' });
                return resolve({ error: false, data: infoCategory })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    getAll: () => {
        return new Promise( async resolve => {
            try {
                let roles = await ROLE_COLL.find({ });
                if(!roles)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: roles });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    updateByID : ({ roleID, name, key }) => {
        return new Promise( async resolve => {
            try {
                let infoRoleAfterUpdate = await ROLE_COLL.findByIdAndUpdate(roleID, {
                    name, key
                }, { new: true });
                if(!infoRoleAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoRoleAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    updateStatusByID : ({ roleID, status }) => {
        return new Promise( async resolve => {
            try {
                let infoRoleAfterUpdate = await ROLE_COLL.findByIdAndUpdate(roleID, {
                    status
                }, { new: true });
                if(!infoRoleAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoRoleAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },
   
    removeByID : (roleID) =>{
        return new Promise(async resolve => {
            try {
                let infoRoleAfterRemove = await ROLE_COLL.findByIdAndDelete(roleID);
                if(!infoRoleAfterRemove)
                    return resolve({ error: true, message: 'cannot_remove' });
                return resolve({ error: true, data: infoRoleAfterRemove });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}


