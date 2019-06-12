import axios from 'axios'
import config from '../config/API'

let getComics = () => {
    return axios.get(config.urlBasis + config.comicsList + config.apiKey)
}

let comicByID = (id) => {
    return axios.get(config.urlBasis + config.comicByID + id + config.apiKey)
}

export default {
    getComics,
    comicByID
}