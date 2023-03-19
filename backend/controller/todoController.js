import Todo from './../models/todoModel.js';
import Joi from 'joi';
import {todoSchema,updateTodoSchema} from '../dto/todoDto.js';
import mongoose from 'mongoose';

export const getAllTodo = async (request,response)=>{

    try{
        const todo = await Todo.find();
        response
        .status(200)
        .json({
            status:'success',
            data:todo
        })
    
    }catch(error){
        console.log('error while getting all todo.')
    }
}

export const addTodo = async(request,response)=>{

    try{
        const {error} = todoSchema.validate(request.body);
        if (error){
                response
                .status(400)
                .json({
                    status:'Failed',
                    message:error
                })
        }
        const todo = await Todo.create(request.body);
        response
            .status(200)
            .json({
                status:'Success',
                data:{
                    data:todo
                }
            })
    }
    catch(error){
        console.log('error while adding todo.');
        console.log(error);
    }
}

export const updateTodo = async (request,response)=>{

    try{
        const isValidId = mongoose.Types.ObjectId.isValid(request.parans.todoId);
        const {error} =  updateTodoSchema.validate(request.body);
        if(error){
            response
            .status(400)
            .json({
                status:'Failed',
                message:error
            })
        }
        if(!isValidId){
            response
            .status(400)
            .json({
                status:'Failed',
                message:'Not valid Id.'
            })
        }
        const updatedTodo = await Todo.findByIdAndUpdate(request.parans.todoId,request.body,{
            new:true
        });


    }catch(error){
        console.log('error');
        response.send('Error while updating todo.');
    }
}