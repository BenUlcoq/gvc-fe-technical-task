import axios from 'axios'

const API = axios.create({
    baseURL: "https://api.neds.com.au/rest/v1/"
})

export default API