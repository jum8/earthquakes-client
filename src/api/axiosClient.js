import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json"
  }
});


axiosClient.interceptors.response.use(res => res.data);

export default axiosClient;