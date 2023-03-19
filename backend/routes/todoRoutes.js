import express from 'express';
import {getAllTodo,addTodo,updateTodo} from './../controller/todoController.js';

const todoRouter = express.Router();

todoRouter
    .route('/')
    .get(getAllTodo)
    .post(addTodo)

todoRouter
    .route('/:todoId')
    .patch(updateTodo)
    

export default todoRouter;