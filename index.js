const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const user = require('./src/routes/users')
const loggedmiddleware = require('./src/middlewares/logged')

//middleware
app.use(loggedmiddleware.isLogged)
app.use(express.static(path.join(__dirname, './src/public')))

//routes
app.get('/', (req, res) => {
    res.send('Bienvenidos')
})

app.use('/users',user)

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto ${port}`)
})
