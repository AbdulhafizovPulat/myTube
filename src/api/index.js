import request from "../utils/axios";

export const getSearch = (params) => {
  return request({ method: "GET", url: "/search", params });
};

export const getVideo = (params) => {
  return request({ method: "GET", url: "/videos", params });
};

export const getChannel = (params) => {
  return request({ method: "GET", url: "/channels", params });
};
