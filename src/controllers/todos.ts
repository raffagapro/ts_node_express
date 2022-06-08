import { RequestHandler } from "express"
import { Todo } from "../models/todo";

const TODOS:Todo[] = [];

export const createTodo:RequestHandler = (req, res, next) => {
    const newTodo = new Todo(
        Math.random().toString(),
        (req.body as {text:string}).text
    );
    TODOS.push(newTodo);

    res.status(201).json({message: 'Todo created', todo: newTodo});
}

export const getTodos:RequestHandler = (req, res, next) => {
    console.log('aqui guey');
    res.status(201).json({todos: TODOS});
}

export const updateTodo:RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

    res.status(200).json({message: 'Todo updated', todo: TODOS[todoIndex]});
}

export const deleteTodo:RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS.splice(todoIndex, 1);

    res.status(200).json({message: 'Todo deleted'});
}
