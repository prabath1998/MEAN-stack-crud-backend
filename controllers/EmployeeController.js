const express = require('express');
var router = express.Router();

var {Employee} = require('../models/employee');

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if (!err) {
            
            res.send(docs);
        }else{
            console.log("Error in retrieving employees :"+ JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;