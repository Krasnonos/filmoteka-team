import hbs from '../../hbs-templates/film-card-home-page.hbs';
import { genreIds } from './ganre-ids';
import { convertGanres } from './convert-name-ganres';

export function createMarkup(results) {
  let markup = '';

  results.forEach(res => {
    const data = {
      filmId: res.id,
      title: res.name || res.title,
      urlImg: res.poster_path,
      relisYer: (res.release_date || res.first_air_date).slice(0, 4),
      ganres: res.genre_ids.map(id => convertGanres(genreIds, id)),
    };
    markup += hbs(data);
  });
  return markup;
}
