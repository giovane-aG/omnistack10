import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.18.11:3000'
})

export default api