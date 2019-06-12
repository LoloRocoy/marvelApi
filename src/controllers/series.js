import axios from 'axios'
import config from '../config/API'

let getSeries = () => {
    return axios.get(config.urlBasis + config.seriesList + config.apiKey)
}

let serieByID = (id) => {
    return axios.get(config.urlBasis + config.serieByID + id + config.apiKey)    
}

export default {
    getSeries,
    serieByID
}