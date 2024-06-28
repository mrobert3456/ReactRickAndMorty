import { getAllCharacters } from "../api/characters";
import { Character } from "../_components/characters/characters";
import { useQuery } from "@tanstack/react-query";

const fetchCharacters = () => async () => {
  const { data } = await getAllCharacters();
  return data.results;
};

export const useGetCharacters = () => {
  return useQuery<Character[], Error>(["characters"], fetchCharacters(), {
    keepPreviousData: true,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
