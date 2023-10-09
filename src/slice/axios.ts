import axios from "axios";

const instance = axios.create({
  baseURL: "https://3mmar.amadagency.net/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  // withCredentials: true,
});

export default instance;
