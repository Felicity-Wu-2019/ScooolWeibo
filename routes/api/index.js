const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.json({text:'school weiboAPI'});
});

module.exports=router;