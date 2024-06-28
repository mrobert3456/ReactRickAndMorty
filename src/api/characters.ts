import axios from "axios";
import { Pagination } from "../_components/datatable/table";

export const getAllCharacters = (pagination: Pagination) => {
  return axios.get(
    `https://rickandmortyapi.com/api/character/?page=${pagination.page}`
  );
};
