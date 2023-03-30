const express=require('express');
const bodyParser=require('body-parser');


const app=express();

// const loginRoutes=require('./route/login.js');
const msjRoutes=require('./route/msj.js');

app.use(bodyParser.urlencoded({extended:false}));

// app.use(loginRoutes);
app.use(msjRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000,()=>{
    console.log('server started at port 3000');
})