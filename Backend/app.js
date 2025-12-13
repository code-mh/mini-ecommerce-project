const express=require("express");
const app=express();

const dotenv=require("dotenv");

const path=require("path");
dotenv.config({path: path.join(__dirname,"config","var.env")}); 
const productroutes =require("./routes/products");
const orderroutes =require("./routes/orders");
const connectDatabase =require("./config/connectDatabase");
const cors = require('cors');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/api/v1",productroutes);
app.use("/api/v1",orderroutes);

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.ENV_WORkING}`);  
})



