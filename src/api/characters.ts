import { Pagination } from "../_components/datatable/table";
import { CharacterListFilterProps } from "../hooks/useCharachtersFilter";
import axiosInstance from "./_default";

export const getAllCharacters = (
  pagination: Pagination,
  filter: CharacterListFilterProps
) => {
  return axiosInstance.get(`/character/`, {
    params: {
      page: pagination.page,
      ...filter,
    },
  });
};

export const getOneCharacter = (id: number) => {
  return axiosInstance.get(`/character/${id}`);
};
