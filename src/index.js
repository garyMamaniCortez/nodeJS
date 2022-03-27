const express = require('express')
const path = require('path')
const app = express()
const user = require('./routes/users')
const loggedmiddleware = require('./middlewares/logged')

// settings
app.set('title', 'Aplicacion hecha en Node.js')
app.set('port', '3000')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware
app.use(loggedmiddleware.isLogged)
app.use(express.static(path.join(__dirname, './src/public')))

//routes
app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users',user)

app.listen(app.get('port'), () => {
    console.log(app.get('title') + ` corriendo en el puerto `+ app.get('port'))
})
