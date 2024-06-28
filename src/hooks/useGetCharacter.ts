import { getOneCharacter } from "../api/characters";
import { Character } from "../_components/characters/characters";
import { useQuery } from "@tanstack/react-query";
const fetchCharacter = (id: number) => async () => {
  const { data } = await getOneCharacter(id);
  return data;
};

export const useGetCharacter = (id: number) => {
  return useQuery<Character, Error>(["character", id], fetchCharacter(id), {
    keepPreviousData: true,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
