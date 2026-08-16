const AdmZip=require("adm-zip");
const extractZip=(zipPath,outputPath)=>{
    const zip=AdmZip(zipPath);
    zip.extractAllTo(outputPath,false);
};
module.exports={
    extractZip
};