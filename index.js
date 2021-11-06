const http= require('http')
const server = http.createServer(onRequest)
const port = 3000
const fs = require('fs')

server.listen(port, () => {
    console.log('servidor corriendo en el puerto:3000')
})

function onRequest(req, res){
    console.log('se ha detectado una peticion')
    if(req.url == '/')
    fs.readFile('index.html', (err, content) => {
        if (err){
            if (err.code == 'ENOENT'){
                res.setStatus = 404
                console.log('No se encontro el archivo')
            }else{
                res.setStatus = 500
                console.log('Ocurrio un error')
            }
        }else{
            res.setStatus = 202
            res.setHeader('Content-type', 'text/html')
            res.write(content)
            res.end()
        }
    })
}
