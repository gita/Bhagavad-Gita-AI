import axios from "axios";
const config = {
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
};

const service = axios.create(config);

export default service;
