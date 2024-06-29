import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://rickandmortyapi.com/api",
});

export default axiosInstance;
