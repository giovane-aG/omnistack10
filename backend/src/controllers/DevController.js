const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
/* 
    Métodos do controller:
        index: mostrar uma lista de recursos
        show: mostrar um recurso específico
        store: para criar um novo recurso
        update: para atualizar um recurso
        delete: para deletar um recurso
*/

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            // Colhendo informações da api do github
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            // Setamos o valor padrão de name para login. Caso name não tenha valor seu valor sempre será o login
            const { name = login, avatar_url, bio } = apiResponse.data

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username: github_username,
                name: name,
                bio: bio,
                avatar_url: avatar_url,
                techs: techsArray,
                location
            })
        }

        return response.json(dev)
    }
}