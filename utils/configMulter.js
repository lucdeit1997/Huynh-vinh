const multer = require('multer');
const path  = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '../public/files/images'));
    },
    filename: function(req, file, cb){
        let extName = path.extname(file.originalname);
        let nameImage = file.originalname.substring(0, file.originalname.indexOf(extName));
        cb(null,  nameImage +"-"+ Date.now() + extName);
    }
})
var upload = multer({ storage });
exports.upload = upload;