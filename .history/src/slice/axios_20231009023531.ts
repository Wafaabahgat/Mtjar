import axios from "axios";

const instance = axios.create({
  baseURL: "https://3mmar.amadagency.net/api/v1",

});

export default instance;
