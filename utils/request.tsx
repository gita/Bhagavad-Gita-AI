import axios from "axios";

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
  },
};

const service = axios.create(config);

export default service;
