import express from 'express';
import {getAllTodo,addTodo} from './../controller/todoController.js';

const todoRouter = express.Router();

todoRouter
    .route('/')
    .get(getAllTodo)
    .post(addTodo)
    

export default todoRouter;