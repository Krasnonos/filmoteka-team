import { getResultData } from '../popular-movies/data-result';
import { getBaseURLPath } from './getBaseURLPath';
import { getGenreByIds } from './getGenreByIds';
import { baseURLPath } from './homeModalJS';

export function getCurrentModalDataFromLocalArray(id) {
  const result = getResultData();
  const currentMovie = result.find(element => element.id === Number(id));

  const title = currentMovie.title
    ? currentMovie.title
    : currentMovie.original_name;

  const genre = getGenreByIds(currentMovie.genre_ids[0]);

  const currentModalData = {
    absolut_poster_path: baseURLPath + currentMovie.poster_path,
    genre: genre,
    original_title: title,
    original_title_to_UpperCase: title.toUpperCase(),
    popularity_to_Fixed: currentMovie.popularity.toFixed(1),
    vote_average: currentMovie.vote_average,
    vote_count: currentMovie.vote_count,
    overview: currentMovie.overview,
  };
  return currentModalData;
}
