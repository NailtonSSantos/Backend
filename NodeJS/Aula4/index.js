const fs = require('fs') //FS - File System, manipulação de arquivos

fs.readFile('./clientes.json', function(error, content){
    if(error){
        console.log('Ops, deu ruim!'. error)
    } else {
        console.log(JSON.parse(content))
    }
})


//Sempre consultar a documentação do módulo pra entender o funcionamento