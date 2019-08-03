var USER_COLL = require('../db/user');
module.exports = {
    checkLogin : async function (userName, userPassword) {
        try {
            let resultLogin = await USER_COLL.findOne({ 'userName':userName, 'userPassword':userPassword })
            if(!resultLogin) return null;
            return resultLogin;
        } catch (error) {
            return null;
        }
    }
}