// Import express module to setup server and handle routes. Its cleaner than http
const express = require('express') 

// Define an instance of express via the app object which can be used to tie routing, middleware and other server logic
const app = express();

// Server listens for reuqests at this port
const PORT = 3000;

// Middleware is a pttern of handling the data in a request-response cycle. Its a set of fucntions that populate the req.body. 
// Middleware handle parsing, loggin, authentication and erro handling during the request-response cycle -- which are common in every http request
// Middleware can execute any code, change req and res objs, call next function to end cycle. If no fn called, cycel doesnt end
app.use(express.json())

// HTTP fn: get we are writing
//Middlewrae applied on http fn, apples on given route and 
// req -> represent http request and has properties and methods
//Routes:
// Defines a route for the root URL /. When a GET request is made to /, the server responds with 'Hello, World!'.
app.get('/home', (req,res) => {
    res.send('Hello, Minnu!');
});

//Starts the server and listens on this port for any http request and responds accordingly
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/home`);
});