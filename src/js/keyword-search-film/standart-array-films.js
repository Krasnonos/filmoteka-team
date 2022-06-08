import {genreIds} from './ganre-ids';
import { validGenre } from './valid-genre';

export function standartindArrayFilms(films) {
    return films.map(({ id, original_title, title, genre_ids, poster_path, backdrop_path, release_date }) => {
        let genre = genre_ids.map(id => validGenre(genreIds, id));
        
        let baseUrl = 'https://image.tmdb.org/t/p/w500';


        if (!poster_path && !backdrop_path) {
            baseUrl = 'https://www.drupal.org/files/project-images/broken-image.jpg';
            poster_path = '';
            backdrop_path = '';
        }

        if (!release_date) {
            release_date = 'YYYY-MM-DD';
        }

        if (!genre.length) {
            genre = ['Film'];
        }


        return {
            filmId: id,
            urlImg: `${baseUrl}${poster_path || backdrop_path}`,
            title: original_title || title,
            ganres: genre,
            relisYer: release_date
        }
    })
}