import axios from 'axios';

const KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';
const BASE_URL = `https://api.themoviedb.org/3/movie/`;
const BASE_URL_CONFIG = 'https://api.themoviedb.org/3/configuration';

const options = {
  params: {
    api_key: KEY,
  },
};

const config1 = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};

const searchInstanceConfig = axios.create({
  baseURL: BASE_URL_CONFIG,
  https: config1,
});

async function fetchSeachRequest(searchInstance) {
  return await searchInstance.get('', options);
}

export async function getModalData(id) {
  const searchInstance = axios.create({
    baseURL: BASE_URL + id,
    https: config1,
  });

  const config = await fetchSeachRequest(searchInstanceConfig);
  const movie = await fetchSeachRequest(searchInstance);
  // console.log(config);
  // console.log(movie.data);
  const posterImageSRC =
    config.data.images.secure_base_url +
    config.data.images.poster_sizes[3] +
    movie.data.poster_path;
  movie.data.absolut_poster_path = posterImageSRC;
  movie.data.genre = movie.data.genres[0].name;
  movie.data.original_title_to_UpperCase =
    movie.data.original_title.toUpperCase();
  movie.data.popularity_to_Fixed = movie.data.popularity.toFixed(1);

  return movie.data;
}
