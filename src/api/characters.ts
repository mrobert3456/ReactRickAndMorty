import axios from "axios";
import { Pagination } from "../_components/datatable/table";
import { CharacterListFilterProps } from "../hooks/useCharachtersFilter";

export const getAllCharacters = (
  pagination: Pagination,
  filter: CharacterListFilterProps
) => {
  return axios.get(`https://rickandmortyapi.com/api/character/`, {
    params: {
      page: pagination.page,
      ...filter,
    },
  });
};

export const getOneCharacter = (id: number) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
};
