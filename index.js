const mysql = require('mysql');
const express = require('express');
var app= express(); 
const bodyparser = require('body-parser');
 
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'password',
    database : 'food1'
});

mysqlConnection.connect((err) =>{
    if(!err)
    console.log('db connection succeded');
    else
    console.log('db connection failed \n error: '+ JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Express server is running at port number 3000')); 

//Get all menu
app.get('/menu',(req,res)=>{
    mysqlConnection.query('SELECT * FROM fpkg_menu',(err,rows,fields)=>{
        if(!err)
         res.send(rows); 
        else
        console.log(err); 
        
    })
});

//get an menu
app.get('/menu/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM fpkg_menu Where itemId= ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
         res.send(rows); 
        else
        console.log(err); 
        
    })
});