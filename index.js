const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://mUser:boriss1@cluster0-ybvq9.mongodb.net/test?retryWrites=true&w=majority',{
             useNewUrlParser: true,
             useFindAndModify: false
        })

        
        app.listen(PORT, ()=> {
            console.log('Server run ...')
        })

    } catch(e){
        console.log('Error', e)
    }
}

start()
