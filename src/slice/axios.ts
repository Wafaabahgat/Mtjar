import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-api.ammarelgendy.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  // withCredentials: true,
});

export default instance;
