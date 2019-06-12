import axios from 'axios'
import config from '../config/API'

let getStories = () => {
    return axios.get(config.urlBasis + config.storiesList + config.apiKey)
}

let storieByID = (id) => {
    return axios.get(config.urlBasis + config.storieByID + id + config.apiKey)
}

export default {
    getStories,
    storieByID
}