const express = require('express'); 
const isLoggedIn = require('./middleware/isLoggedIn');

const createTodosRoute = require('./routes/createTodosRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodosRoute = require('./routes/updateTodosRoute');
const deleteTodosRoute = require('./routes/deleteTodosRoute');

const router = express.Router(); 

router.post('/login', require('./routes/loginRoute'));


//create
router.post('/todos', isLoggedIn, createTodosRoute);

//read
router.get('/todos', isLoggedIn, readTodosRoute);

//update 
router.put('/todos/:id', isLoggedIn, updateTodosRoute);

//delete
router.delete('/todos/:id', isLoggedIn, deleteTodosRoute);

module.exports = router;