const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const AuthRouter=require('./Routes/AuthRouter');
const SpaceRouter=require('./Routes/SpaceRouter')

require('dotenv').config();
require('./Models/db');

const PORT=process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Working fine!!");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/spaces',SpaceRouter);


app.listen(PORT, ()=>{
    console.log("Server is running in 8080");
});