//instatiate express module
const express = require('express')
//instatiate body-parser
const bodyParser = require('body-parser')
//instatiate express group
require('express-group-routes')
//import controller
const categoryControllers = require('./controllers/categoryControllers')
//use express in app variable
const app = express()
//define the server port
const port = 8000
//allow this app to receive incoming json request
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

app.group("/api/v1", (router) => {

    router.get('/categories', categoryControllers.index)

    router.post('/category', categoryControllers.create)
})

//create the homepage route
app.get('/', (req, res) => {
    //res means respone, and it send string to the API
    res.send('Hello Express')
})

app.listen(port, () => console.log(`listening on port ${port}!`))