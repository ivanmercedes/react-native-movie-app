import axios from "axios";
import { API_KEY, API_URL } from "@env";

const axiosClient = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getTrending = async () => {
  const upComing = axiosClient.get("/movie/upcoming");
  const trendingWeek = axiosClient.get("/trending/all/week");

  const res = await axios.all([upComing, trendingWeek]);
  return {
    upcoming: res[0].data.results,
    trendingWeek: res[1].data.results,
  };
};

export const getMovies = (searchTerm) => {};

export const getMovie = (movie_id) => {};

export const getCast = async (movie_id, media_type = "movie") => {
  const cast = await axiosClient.get(`/${media_type}/${movie_id}/credits`);
  return cast.data.cast;
};
