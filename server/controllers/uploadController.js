const path=require("path");
const {extractZip}=require("../services/zipExtractor");
const uploadProject=(req,res)=>{
    const filename=path.parse(req.file.filename).name;
    const outputPath=path.join("temp",filename);
    extractZip(req.file.path,outputPath);
    return res.json({"message":"Upload received"})
};
module.exports={
    uploadProject
};