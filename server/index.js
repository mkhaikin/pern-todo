const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a todo
app.post("/todos", async(req,res,next)=>{
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1) RETURNING *',
            [description]
        );
        console.log('row was inserted.');
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});

// Get all todos
app.get('/todos', async(req,res)=>{
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(error.message)
    }
});

// Get a todo
app.get('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

// Update todo
app.put('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);
        res.json('Todo was updated!')
    } catch (err) {
        console.error(error.message)
    }
});

// Delete todo
app.delete('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
        res.json('Todo was deleted!')
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on PORT 5000")
});