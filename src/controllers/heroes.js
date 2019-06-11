import axios from 'axios'
import config from '../config/API'

let getHeroes = () => {
    return axios.get(config.urlBasis + config.heroesList + config.apiKey)
}

let heroeByID = (id) => {
    return axios.get(config.urlBasis + config.heroeByID + id + config.apiKey)
}

export default {
    getHeroes,
    heroeByID
}