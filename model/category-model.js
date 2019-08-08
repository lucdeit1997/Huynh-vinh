const utils  = require('../utils/utils');
//DB
const objectID = require('mongoose').Types.ObjectId;
var CATEGORY_COLL = require('../db/category');
module.exports = {

    insert : (name) => {
        return new Promise( async resolve =>{
            try {
                let slug = utils.convertToSlug(name);
                let categoryTemp = new CATEGORY_COLL({
                    name, slug
                })
                let infoCategory = await categoryTemp.save();
                if(!infoCategory)
                    return resolve({ error: true, message: 'cannot_get_info' });
                return resolve({ error: false, data: infoCategory })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }, 

    getAll: () => {
        return new Promise( async resolve => {
            try {
                let categories = await CATEGORY_COLL.find({ });
                if(!categories)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: categories });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    getCategoriesByStatus: ( status ) => {
        return new Promise( async resolve => {
            try {
                let categories = await CATEGORY_COLL.find({ status });
                if(!categories)
                    return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: categories });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    },

    updateByID : ({ categoryID, name }) => {
        return new Promise( async resolve => {
            try {
                if(!objectID.isValid(categoryID))
                    return resolve({ error: true, message: 'params is not valid' });
                let infoCategoryAfterUpdate = await CATEGORY_COLL.findByIdAndUpdate(objectID(categoryID), {
                    name
                }, { new: true });
                if(!infoCategoryAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoCategoryAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },

    updateStatusByID : ({ categoryID, status }) => {
        return new Promise( async resolve => {
            try {
                if(!objectID.isValid(categoryID))
                    return resolve({ error: true, message: 'params_is_not_valid' });
                let infoCategoryAfterUpdate = await CATEGORY_COLL.findByIdAndUpdate(categoryID, {
                    status
                }, { new: true });
                if(!infoCategoryAfterUpdate)
                    return resolve({ error: true, message: 'cannot_update' });
                return resolve({ error: false, data: infoCategoryAfterUpdate });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    },
   
    removeByID : (categoryID) =>{
        return new Promise(async resolve => {
            try {
                let infoCategoryAfterRemove = await CATEGORY_COLL.findByIdAndDelete(categoryID);
                if(!infoCategoryAfterRemove)
                    return resolve({ error: true, message: 'cannot_remove' });
                return resolve({ error: true, data: infoCategoryAfterRemove });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}


