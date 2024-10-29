import { getChannel, getSearch, getVideo } from "../api";

export function getSearchQuery(params) {
  return {
    queryKey: ["search-data", params],
    queryFn: async () => getSearch(params),
  };
}

export function getVideoQuery(params) {
  return {
    queryKey: ["video-detail", params],
    queryFn: async () => getVideo(params),
  };
}

export function getChannelQuery(params) {
  return {
    queryKey: ["channels", params],
    queryFn: async () => getChannel(params),
  };
}
