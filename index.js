//instatiate express module
const express = require('express')
//instatiate body-parser
const bodyParser = require('body-parser')
//instatiate express group
require('express-group-routes')
//import controller
const categoryControllers = require('./controllers/categoryControllers')
const articlesControllers = require('./controllers/articlesControllers')
const { authenticated } = require('./middleware')
const AuthController = require('./controllers/authController')
//use express in app variable
const app = express()
//define the server port
const port = 8000
//allow this app to receive incoming json request
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.group("/api/v1", (router) => {
    //task 1
    router.get('/categories', categoryControllers.index)
    router.post('/category', categoryControllers.create)

    //task 2
    router.get('/articles', articlesControllers.index)
    router.get('/article/lastest', articlesControllers.lastest)

    //task3 3
    router.get('/category/:id/article', categoryControllers.perCategory)

    //task 4
    router.post('/article', authenticated, articlesControllers.create)
    router.patch('/article', authenticated, articlesControllers.update)
    router.delete('/article', authenticated, articlesControllers.update)

    //login
    router.post('/login', AuthController.login)


})

//create the homepage route
app.get('/', (req, res) => {
    //res means respone, and it send string to the API
    res.send('Hello Express')
})

app.listen(port, () => console.log(`listening on port ${port}!`))