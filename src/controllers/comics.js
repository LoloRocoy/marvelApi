import axios from 'axios'
import config from '../config/API'

let getComics = () => {
    return axios.get(config.urlBasis + config.comicsUrl + config.apiKey)
}

let comicByID = (id) => {
    return axios.get(config.urlBasis + config.comicByID + id + config.apiKey)
}

let shorter = (route) => {
    if (typeof route === 'string') {
        return route.slice(route.lastIndexOf('/') +1 )
    }
}

export default {
    getComics,
    comicByID,
    shorter
}