import axios from "axios";
import { getItem } from "../storage/index.storage";

const baseURL =
  "https://zuperdev-blog-and-sensordata-tas-production.up.railway.app";

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  if (err?.response?.status >= 400 && err.response.status < 500) {
    alert("client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token) opt.headers = { ...opt.headers, Authorization: "Bearer " + token };
  return opt;
});

export default instance;
