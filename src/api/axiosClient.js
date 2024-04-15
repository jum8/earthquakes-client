import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});


axiosClient.interceptors.response.use(res => res.data);

export default axiosClient;