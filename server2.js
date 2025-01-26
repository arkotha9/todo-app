const express = require('express');
const app = express();
const PORT = 3001;

//Middlewares
const myLogger = function(req, res, next){
    console.log('Request passed through my app for logger object');
    next(); //calls next middle ware
}

// I ma adding a custom property is this middleware fn to my req object that i would be using. 
// I can deifnie a custom vairble as a property to requestobject like below and use it 
const timio = function(req, res, next){
    req.timio = Date.now();
    console.log('Request passed through my app for requestTime object');
    next();
}


// use middleware before the routing to root path. Middleware are loaded first and executed firt. 
// If it is after route, the route handler terminates the reqest-rsponse cycle and myLogger wont be called
app.use(myLogger);
app.use(timio);

app.get('/', (req,res)=>{
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.timio}</small>`
    res.send(responseText)
})

//Starts the server and listens on this port for any http request and responds accordingly
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});