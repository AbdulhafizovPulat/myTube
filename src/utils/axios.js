import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  timeout: 60000,
});

export function errorHandler(error) {
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error.response);
  }
  if (error.request) {
    return Promise.reject(error.request);
  }
  return Promise.reject(error);
}

request.defaults.headers.timezone = new Date().getTimezoneOffset();

request.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("token")
  //     ? localStorage.getItem("token")
  //     : "";
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  config.headers["x-rapidapi-key"] =
    "3d60b41933msh8fdad79f296a00fp103504jsn19f7c45d143b";
  config.headers["x-rapidapi-host"] = "youtube-v31.p.rapidapi.com";
  return config;
}, errorHandler);

// request.interceptors.response.use((response) => {
//   const pagination = response.headers?.["x-pagination"]
//     ? JSON.parse(response.headers?.["x-pagination"])
//     : "";

//   const payload = response.data.result || response.data.item || response.data;
//   if (pagination) {
//     payload.pagination = pagination;
//   }
//   return payload;
// }, errorHandler);

export default request;
