import axios from "axios";

const instance = axios.create({
    baseURL:'https://nikhil-api.onrender.com'
})

export default instance