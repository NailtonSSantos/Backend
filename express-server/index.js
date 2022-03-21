const express = require ('express')
const res = require('express/lib/response')
const app = express()
const path = require('path')
const fs = require('fs')





app.set('view engine', 'ejs')


//MVC - MODEL VIEW CONTROLLER


//COM TEMPLATE ENGINE EU NÃO PRECISO MAIS ESPECIFICAR OS ARQUIVOS ESTÁTICOS
//definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))
/*
o MIDDLEWARE app.use recebe a constante express.static, que por sua vez recebe o caminho da pasta, onde entra o path.join e concatena esse caminho*/

//Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//Habillita o server para receber os dados via post (formulário)
app.use(express.urlencoded({ extended: true}))



//Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Iphones Roo - Home'
    })
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Iphones Roo - Posts',
        posts: [
            {
                title: 'Novidade no mundo da tecnologia',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error ratione fugiat commodi adipisci nam inventore necessitatibus iste, sint asperiores, corporis maxime quis itaque cum at alias, illum doloremque praesentium.',
                stars: 3
            },
            {
                title: 'Criando um Servidor com NodeJS',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error ratione fugiat commodi adipisci nam inventore necessitatibus iste, sint asperiores, corporis maxime quis itaque cum at alias, illum doloremque praesentium.'
            },
            {
                title: 'Javascript é a linguagem mais usada no mundo',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error ratione fugiat commodi adipisci nam inventore necessitatibus iste, sint asperiores, corporis maxime quis itaque cum at alias, illum doloremque praesentium.',
                stars: 5
            }
        ]
    })
})



app.get('/cadastro-posts', (req, res) => {
    const { c } = (req.query)
    res.render('cadastro-posts', {
        title: 'Iphones Roo - Cadastrar Posts',
        cadastrado: c,
    })
})

app.post('/salvar-post', (req, res) => {
    const {titulo, texto} = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
    })

    const postsString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts.json', postsString)


    res.redirect('/cadastro-posts?c=1')
})




//404 Error (Not Found)
app.use((req,res) => { //Middleware
    res.send('Página não encontrada!')
})


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))