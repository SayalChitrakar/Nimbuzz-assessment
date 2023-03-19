import express from 'express';
const app = express();
import dotenv from 'dotenv';
import todoRouter from './routes/todoRoutes.js';

dotenv.config();
app.use(express.json());

app.get('/ping',(request,response)=>{
    response.send('pong')
});
app.use('/api/todo',todoRouter);
export default app;