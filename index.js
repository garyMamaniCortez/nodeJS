const express = require('express')
const app = express()
const port = 3000
const user = require('./src/routes/users')

//routes
app.get('/', (req, res) => {
    res.send('Bienvenidos')
})

app.use('/users',user)

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto ${port}`)
})
