const ensureAuthenticated = require('../Middlewares/Auth');

const router=require('express').Router();

router.get('/',ensureAuthenticated,(req,res)=>{
    res.status(200).json([
        {
            name:"space1",
            totalfeedbacks:2
        },
        {
            name:"space2",
            totalfeedbacks:3
        }
    ])
})

module.exports=router;
