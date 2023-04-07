import axios from "axios";
const instence = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    }
})

export default instence