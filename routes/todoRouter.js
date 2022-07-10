const express = require(`express`)
const todoRouter = express.Router()
const Todo =require(`../models/todo.js`)

//get all
todoRouter.get(`/`, (req, res, next)=>{
    Todo.find((err, todos)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

//add
todoRouter.post(`/`, (req,res,next)=>{
    const newTodo = new Todo(req.body)
    newTodo.save((err, savedTodo) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saavedTodo)
    })
})

//delete
todoRouter.delete(`/:todoId`, (req,res,next) =>{
    Todo.findOneAndDelete(
        {_id: req.params.todoId},
        (err, deleteTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`you have deleted the todo: ${deleteTodo}`)
        }
    )
})

//update
todoRouter.put(`/:todoId`, (req, res, next)=>{
    Todo.findOneAndUpdate(
        {_id: req.params.todoId},
        req.body,
        {new: true},
        (err, updateTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateTodo)
        }
    )
})

module.exports = todoRouter