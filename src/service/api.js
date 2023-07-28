import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorerfood.onrender.com",
});
