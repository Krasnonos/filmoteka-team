
import KeywordSearchFilmServise from './servise-keyword-search-film';


export async function getFilm(searchQuery) {

    const keywordSearchFilmServise = new KeywordSearchFilmServise;

    keywordSearchFilmServise.query = searchQuery;

    const res = await keywordSearchFilmServise.getFilm();

    const arrayFilms = res.data.results;

    return arrayFilms;
   
}
