// Import express module to setup server and handle routes. Its cleaner than http
const express = require('express') 
// Create routes to handle CRUD requests
const db = require('./database')

// Define an instance of express via the app object which can be used to tie routing, middleware and other server logic
const app = express();

// Server listens for reuqests at this port
const PORT = 3000;

// Middleware is a pttern of handling the data in a request-response cycle. Its a set of fucntions that populate the req.body. 
// Middleware handle parsing, loggin, authentication and erro handling during the request-response cycle -- which are common in every http request
// Middleware can execute any code, change req and res objs, call next function to end cycle. If no fn called, cycel doesnt end
app.use(express.json())

// // HTTP fn: get we are writing
// //Middlewrae applied on http fn, apples on given route and 
// // req -> represent http request and has properties and methods
// //Routes:
// // Defines a route for the root URL /. When a GET request is made to /, the server responds with 'Hello, World!'.
app.get('/', (req,res) => {
    res.send('Hello, Minnu!');
});

// Define CRUD routes
// 1. POST route to create a new task - add a new task to database or update exisitn task. We send our request though th body isntead of url
// server rocess data and gives a request code and result. 500 means server erro and 200 mean all ok, 201 means succesuly created the resouce.
app.post('/tasks', (req, res) => {
    const {task} = req.body;
    db.run('INSERT INTO tasks (task) VALUES (?)', [task], (err) => {
        if (err){
            return res.status(500).json({error: 'Internal Server Error'});
        }
        res.status(201).json({message: 'Task created successfully'});
    });
});

// 2. get rows from the database. Db.all runs and calls the call back function so i it is succesful rows variable has all the rows of db
app.get('/tasks', (req, res) => {
    db.all('SELECT * FROM tasks', [], (err, rows) => {
        if (err){
            return res.status(500).json({error:'Internal Server Issue for Getting Tasks'});
        }
        res.status(200).json(rows);
    });
});

// 3. PUT route to update a task
app.put('/tasks/:id', (req,res) => {
    const {id} = req.params;
    const {task, completed} = req.body;
    db.run('UPDATE tasks SET task = ?, completed = ? WHERE id = ?', [task, completed, id], (err) => {
        if(err){
            return res.status(500).json({error: 'Internal Server Error to update task'});
        }
        res.status(200).json({message: 'Task updated successfully'});
    });
});

//4. DELETE route to delete a task
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM tasks WHERE id = ?', id, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
});

//Starts the server and listens on this port for any http request and responds accordingly
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/home`);
});