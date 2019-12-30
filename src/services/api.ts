import axios from "axios";

const api = axios.create({
  baseURL: "https://test.adopets.app/v1/"
});

export default api;
