const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup',(req,res) => {
    let user = req.body;
    const checkquery = "select name,email,password,status,role,contactnumber from user where email=?"
    connection.query(checkquery,[user.email],(err,result)=>{
        if(!err){
            if( result.length <=0){
                const query = "insert into user(name,email,password,status,role,contactnumber) values (?,?,?,'false','user',?)"
                connection.query(query,[user.name,user.email,user.password,user.contactnumber],(err,result) =>{
                    if(!err){
                        return res.status(200).json({message:"Successfully Register"});
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            } else{
                return res.status(4).json({message:"Email Already Exist"});
            }
        } else{
            return res.status(500).json(err);
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    })
})

module.exports = router;