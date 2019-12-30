import axios from "axios";

interface Api {
  baseURL: string;
}

const api = axios.create({
  baseURL: "https://test.adopets.app/v1/"
} as Api);

export default api;
