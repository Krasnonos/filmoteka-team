
import KeywordSearchFilmServise from './servise-keyword-search-film';
// import paginationTmp from '../pagination/pagination.hbs';
// import { pagination } from './pagination';


export async function getFilm(searchQuery) {

    const keywordSearchFilmServise = new KeywordSearchFilmServise;

    keywordSearchFilmServise.query = searchQuery;

    const res = await keywordSearchFilmServise.getFilm();

    const arrayFilms = res.data.results;

    return arrayFilms;

    
}

// renderMarkup(paginationRef, paginationTmp());
// pagination();
