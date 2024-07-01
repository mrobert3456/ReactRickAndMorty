import axiosInstance from "./_default";

export const getEpisodes = (ids: number[]) => {
  const episodeIds = ids.join(",");
  return axiosInstance.get(`/episode/${episodeIds}`);
};
