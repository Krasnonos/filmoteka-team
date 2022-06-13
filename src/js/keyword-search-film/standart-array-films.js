import {genreIds} from './ganre-ids';
import { validGenre } from './valid-genre';
import imgNotFound from '../../images/Logo.png';

export function standartindArrayFilms(films) {
    return films.map(({ id, original_title, title, genre_ids, poster_path, backdrop_path, release_date }) => {
            
        let baseUrl = 'https://image.tmdb.org/t/p/w500';


        if (!poster_path && !backdrop_path) {
            baseUrl = imgNotFound;
            poster_path = '';
            backdrop_path = '';
        }

        return {
            filmId: id,
            urlImg: `${baseUrl}${poster_path || backdrop_path}`,
            title: original_title || title,
            ganres: genre_ids.map(id => validGenre(genreIds, id)).join(', ') || 'Film',
            relisYer: (release_date || 'XXXX').slice(0, 4)
        }
    })
}