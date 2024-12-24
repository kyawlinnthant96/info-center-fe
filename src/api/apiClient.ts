import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_URL}/api`;
const apikey = import.meta.env.VITE_X_API_KEY;
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apikey,
  },
});
