const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){ //http Server retorna um objeto com alguns métodos
    console.log(req.url)

    if(req.url === '/'){
    fs.readFile('../client/index.html', function(error, content){
        res.end(content)
    })
    }

    if (req.url === '/teste'){
        res.end('Ok funcionou')
    }
})

server.listen(8080)