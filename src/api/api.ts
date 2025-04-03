import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/cartoons/cartoons2D',
});

export default api;