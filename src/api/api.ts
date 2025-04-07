import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/cartoons',
});

export default api;