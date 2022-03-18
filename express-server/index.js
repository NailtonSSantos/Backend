const express = require ('express')
const app = express()
const path = require('path')


//MVC - MODEL VIEW CONTROLLER



//definindo os arquivos estáticos
app.use(express.static(path.join(__dirname, 'views')))
/*
o MIDDLEWARE app.use recebe a constante express.static, que por sua vez recebe o caminho da pasta, onde entra o path.join e concatena esse caminho*/

//Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))



//Rotas
app.get('/', (req, res) => {
    res.render('views/index')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre')
})



//404 Error (Not Found)
app.use((req,res) => {         //Middleware
    res.send('Página não encontrada!')
})


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))