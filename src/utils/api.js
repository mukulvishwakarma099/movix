import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + VITE_TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
