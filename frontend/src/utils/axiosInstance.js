import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true, // Include cookies in the request
});

export default axiosInstance;