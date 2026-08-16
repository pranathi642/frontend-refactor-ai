const express=require('express');
const upload=require("../middleware/zipUploadMiddleware");
const {uploadProject}=require("../controllers/uploadController");
const router=express.Router();
router.post("/upload",upload.single("project"),uploadProject);
module.exports=router;
