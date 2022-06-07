import { genreIds } from './ganre-ids';
import { requestPopularMovies } from './request-popular-movies';
import { convertGanres } from './convert-name-ganres';
document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  const res = await requestPopularMovies(1);
  const result = await res.data.results;
  let markup = '';

  result.forEach(res => {
    const convert = res.genre_ids.map(id => convertGanres(genreIds, id));
    markup += `<div><img src='https://image.tmdb.org/t/p/original${
      res.poster_path
    }'><p>${res.name || res.title}</p><p>${convert.join(', ')}</p><p>${(
      res.release_date || res.first_air_date
    ).slice(0, 4)}</p><p>${res.vote_average}</p></div>`;
  });

  document.body.insertAdjacentHTML('beforeend', markup);
}
