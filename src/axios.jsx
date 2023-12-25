import axios from "axios"
const instance = axios.create({
    baseURL: "https://amazons-clone.vercel.app/",
})
export default instance
