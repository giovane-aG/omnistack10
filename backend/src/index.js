// www.omnistack.com/users
// /users é a rota e os usuários nela são os recursos buscados
// o express é um micro framework que facilita a criação das rotas
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://giovane:giovane@cluster0-mpxxd.mongodb.net/week10', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(routes)

app.listen(3333)

// Métodos HTTP: get, post, put, delete

// Query Params: request.query (Filtros, ordenação, paginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro )

// MongoDB (Não-relacional)
// requisição é tudo aquilo que o cliente envia por meio do front-end para o back-end
// resposta é a maneira como devolveremos as informações exigidas
// definindo qual porta do servidor local utilizaremos