import { getOneCharacter } from "../api/characters";
import { Character } from "../_components/characters/characters";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
const fetchCharacter = (id: number) => async () => {
  const { data } = await getOneCharacter(id);
  return data;
};

export const useGetCharacter = (id: number) => {
  return useQuery<Character, AxiosError>(
    ["character", id],
    fetchCharacter(id),
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
