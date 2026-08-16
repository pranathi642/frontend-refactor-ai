const multer = require("multer");
//const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"temp/");
    },

    filename: function (req, file, cb) {
        cb(null,Date.now()+".zip");
    }
});
const upload=multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        if(file.mimetype==="application/zip"){
            cb(null,true);
        }else{
            cb(new Error("Only ZIP files are allowed"));
        }
    }
});
module.exports=upload;