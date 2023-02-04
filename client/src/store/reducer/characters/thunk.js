import axios from "axios";
import { getCharacters, getSearch } from "./character";

export const getApi = (page) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    dispatch(getCharacters(response.data.results));
    dispatch(getSearch(response.data.results))
  };
};

