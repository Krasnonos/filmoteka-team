import hbs from '../../hbs-templates/film-card-library.hbs';
import { genreIds } from '../popular-movies/ganre-ids';
import { convertGanres } from '../popular-movies/convert-name-ganres';

export default function createMarkup(results) {
  let markup = '';

  results.forEach(res => {
    const data = {
      filmId: res.id,
      title: res.name || res.title || 'XXXX',
      urlImg: res.poster_path,
      relisYer: (res.release_date || res.first_air_date || 'XXXX').slice(0, 4),
      ganres:
        res.genres
          .map(({ name }) => name)
          .slice(0, 2)
          .join(', ') || 'XXXX',
      ratting: res.vote_average,
    };
    markup += hbs(data);
  });
  return markup;
}
