const http= require('http')
const server = http.createServer(onRequest)
const port = 3000
const fs = require('fs')
const query = require('querystring')

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
    else if(req.url == '/users'){
        if(req.method == 'GET'){
            res.setStatus = 202
            res.setHeader('Content-type', 'text/html')
            res.write('Accediendo a usuarios')
            res.end()
        }else if(req.method == 'POST'){
            var datos = ''
            req.on('data', (d) => {
                datos += d
            })
            req.on('end', () => {
                var post = query.parse(datos)
                res.end('datos recibidos: '+ post.nombre)
            })
        }else if(req.method == 'PUT'){
            var datos = ''
            req.on('data', (d) => {
                datos += d
            })
            req.on('end', () => {
                var post = query.parse(datos)
                res.end('datos recibidos: '+ post.nombre)
            })
        }else if(req.method == 'DELETE'){
            var datos = ''
            req.on('data', (d) => {
                datos += d
            })
            req.on('end', () => {
                var post = query.parse(datos)
                res.end('datos recibidos: '+ post.nombre)
            })
        }
    }
}
