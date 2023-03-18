const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.get('/',(request,response)=>{
    response.send('hello world');
});

const DB = 'mongodb+srv://Sayal:Sayal@natoursapp.nnmru.mongodb.net/nimbuzz-todo?retryWrites=true&w=majority'

mongoose.connect(DB,{
}).then(()=>console.log('connected to database successfully.'))
.catch((error)=> console.log(error))
app.listen(port,()=>{
    console.log(`listening to server on port ${port}`);
});

