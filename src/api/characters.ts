import axios from "axios";

export const getAllCharacters = () => {
  return axios.get("https://rickandmortyapi.com/api/character");
};
