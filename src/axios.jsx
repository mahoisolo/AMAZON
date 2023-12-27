import axios from "axios"
const instance = axios.create({
    baseURL: "https://amazon-backenddd.onrender.com",
})
export default instance
