import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    // baseURL: import.meta.env.VITE_API_URL ||
    //     'http://backend-service.bookeshop.svc.cluster.local:8080/api',
    // baseURL: "http://backend-service:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;