const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    
    res.render('index',{
        title: 'list of todo',
        todos: todos
    })
})

router.get('/create', (req,res) => {
    res.render('create', {
        title: 'create todo'
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

module.exports = router