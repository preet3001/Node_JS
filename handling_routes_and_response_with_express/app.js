const express = require('express');

const app = express();

const PORT =3000;

app.use('/user',(req,res,next)=>{
    console.log('Second middleware');
    res.send('<h1>User Page');
});

app.use('/',(req,res,next)=>{
    console.log('first middleware');
    res.send('<h1>The first Page');
    next();
});

app.listen(PORT);