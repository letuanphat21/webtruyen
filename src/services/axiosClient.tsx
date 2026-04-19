import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://otruyenapi.com/v1/api",
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export default axiosClient;
