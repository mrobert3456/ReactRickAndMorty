import { getAllCharacters } from "../api/characters";
import { Character } from "../_components/characters/characters";
import { useQuery } from "@tanstack/react-query";
import { PaginatedList, Pagination } from "../_components/datatable/table";

const fetchCharacters = (pagination: Pagination) => async () => {
  const { data } = await getAllCharacters(pagination);
  return { info: data.info, list: data.results };
};

export const useGetCharacters = (pagination: Pagination) => {
  return useQuery<PaginatedList<Character>, Error>(
    ["characters", pagination],
    fetchCharacters(pagination),
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
