import { getAllCharacters } from "../api/characters";
import { Character } from "../_components/characters/characters";
import { useQuery } from "@tanstack/react-query";
import { PaginatedList, Pagination } from "../_components/datatable/table";
import { CharacterListFilterProps } from "./useCharachtersFilter";

const fetchCharacters =
  (pagination: Pagination, filter: CharacterListFilterProps) => async () => {
    const { data } = await getAllCharacters(pagination, filter);
    return { info: data.info, list: data.results };
  };

export const useGetCharacters = (
  pagination: Pagination,
  filter: CharacterListFilterProps
) => {
  return useQuery<PaginatedList<Character>, Error>(
    ["characters", pagination, filter],
    fetchCharacters(pagination, filter),
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
