import hbs from '../../hbs-templates/film-card-library.hbs';
import { genreIds } from '../popular-movies/ganre-ids';
import { convertGanres } from '../popular-movies/convert-name-ganres';
import imgNotFound from '../../images/image-not-found-adaptive.png';
import svg from '../../images/icons.svg';

export default function createMarkup(results) {
  let markup = '';

  results.forEach(res => {
    const ganres = res.genre_ids?.map(id => convertGanres(genreIds, id));
    if (ganres.length > 2) {
      ganres.length = 2;
      ganres.push('Others');
    }
    const data = {
      svg,
      filmId: res.id,
      title: res.name || res.title || 'XXXX',
      urlImg: res.poster_path,
      relisYer: (res.release_date || res.first_air_date || 'XXXX').slice(0, 4),
      ganres: ganres.join(', ') || 'Others',
      ratting: res.vote_average,
    };
    markup += hbs(data);
  });
  return markup;
}
