const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

// Schema é a estruturação de uma entidade dentro do banco de dados
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})
// Para exportar o model devemos utilizar a função abaixo passando o nome
// desejado do modelo como primeiro parâmentro e o nome do Schema como segundo parâmentro
module.exports = mongoose.model('Dev', DevSchema)