import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../api/episodes";
import { Episode } from "../_components/profile/profilData";
import { AxiosError } from "axios";
const fetchEpisodes = (ids: number[]) => async () => {
  const { data } = await getEpisodes(ids);
  return Array.isArray(data) ? data : [data];
};

export const useGetEpisodes = (ids: number[], enabled = false) => {
  return useQuery<Episode[], AxiosError>(
    ["episodes", ids],
    fetchEpisodes(ids),
    {
      enabled: enabled,
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
