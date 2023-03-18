import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();

app.get('/ping',(request,response)=>{
    response.send('pong')
});
export default app;