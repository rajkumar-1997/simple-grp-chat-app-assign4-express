const express=require('express');

const router=express.Router();
const fs=require('fs');


router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat available'
        }
        res.send(`${data}<form action="/"  onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input id="message" type="text" name="message"><input type="hidden" id="username" name="username"> <br><button  id="sbtn" type="submit">Send</button></from>`)
    })
})

router.post('/',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        if(err){
            console.log(err);
        }
    })

    res.redirect('/');
    
})



router.get('/login',(req,res,next)=>{
    res.send(`<form action="/login" onSubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST"><input  type="text" id="username" name="username"><br><button type="submit" id="lbtn" >Login</button></from>`)
})


router.post('/login',(req,res,next)=>{

 
   
    console.log(req.body);
    res.redirect('/');
})




module.exports=router;




module.exports=router;
