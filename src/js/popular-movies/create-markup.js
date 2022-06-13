import hbs from '../../hbs-templates/film-card-home-page.hbs';
import { genreIds } from './ganre-ids';
import { convertGanres } from './convert-name-ganres';

export function createMarkup(results) {
  let markup = '';

  results.forEach(res => {
    console.log(res.genre_ids);
    const data = {
      filmId: res.id,
      title: res.name || res.title || 'XXXX',
      urlImg: res.poster_path,
      relisYer: (res.release_date || res.first_air_date || 'XXXX').slice(0, 4),
      ganres:
       res.genre_ids ? res.genre_ids.map(id => convertGanres(genreIds, id)).join(', ') : 'XXXX',
    };
    markup += hbs(data);
  });
  return markup;
}
