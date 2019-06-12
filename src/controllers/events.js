import axios from 'axios'
import config from '../config/API'

let getEvents = () => {
    return axios.get(config.urlBasis + config.eventsList + config.apiKey)    
}

let eventByID = (id) => {
    return axios.get(config.urlBasis + config.eventByID + id + config.apiKey)
}

export default {
    eventByID,
    getEvents
}