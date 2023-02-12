import axios from "axios";
import Cookies from "js-cookie";



const config = {
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    'token': Cookies.get("Token")
  }
};

const service = axios.create(config);

export default service;
