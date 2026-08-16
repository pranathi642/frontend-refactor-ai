const express=require('express');
const cors=require('cors');
const uploadRoutes=require("./routes/uploadRoutes");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api",uploadRoutes);
app.get('/api/test',(req,res)=>{
    return res.json({"message":"Backend is working"});
});
app.listen(5000,()=>{
    console.log("Server is running at port 5000");
});
