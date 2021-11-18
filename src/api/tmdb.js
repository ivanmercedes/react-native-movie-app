import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f7e267150c4eb4bd6a147dd50a8a749a",
    language: 'en-US'
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
  // await axiosClient.get(trendingWeek);
};

export const getMovies = (searchTerm) => {};

export const getMovie = (movie_id) => {};

export const getCast = async (movie_id, media_type = 'movie') => {
  const cast = await axiosClient.get(`/${media_type}/${movie_id}/credits`);
  return cast.data.cast;
};
