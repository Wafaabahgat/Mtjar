import axios from "axios";

const instance = axios.create({
  baseURL: "https://estore.ammarelgendy.online/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  // withCredentials: true,
});

export default instance;
