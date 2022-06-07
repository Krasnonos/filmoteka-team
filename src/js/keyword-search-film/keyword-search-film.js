console.log('hello this is keyword-search-film');
import KeywordSearchFilmServise from './servise-keyword-search-film';
import cardTpl from '../../hbs-templates/film-card-home-page.hbs';
import {genreIds} from '../ganre-ids';



const refs = {
    galleryList: document.querySelector('.gallery-list'),
    form: document.querySelector('.home-header_search'),
    input: document.querySelector('.home-header_search_input'),
    btn: document.querySelector('.home-header_search_button')
};

refs.form.addEventListener('submit', onSearchFilmSubmitForm)

async function onSearchFilmSubmitForm (e) {
    e.preventDefault();

    let inputValue = e.currentTarget.elements.searchQuery.value;

    const arrayFilms = await getFilm(inputValue);
    
    const validFilmsArray = standartindArrayFilms(arrayFilms);

    console.log(validFilmsArray);

    renderCards(validFilmsArray);

}

async function getFilm(searchQuery) {

    const keywordSearchFilmServise = new KeywordSearchFilmServise;

    keywordSearchFilmServise.query = searchQuery;

    const res = await keywordSearchFilmServise.getFilm();

    const arrayFilms = res.data.results;

    return arrayFilms;
}

function renderCards(cards) {
    const marcup = cards.map(card => cardTpl(card)).join('');
     refs.galleryList.insertAdjacentHTML('beforeend', marcup)
}

function standartindArrayFilms(films) {
    return films.map(({ id, original_title, genre_ids, poster_path = '%7B%7BurlImg%7D%7D', release_date }) => {
        const genre = genre_ids.map(id =>  validGenre(genreIds, id));

        return {
            filmId: id,
            urlImg: poster_path,
            title: original_title,
            ganres: genre,
            relisYer: release_date
        }
    })
}

function validGenre (allGanres, oneGanres) {
    let genres = [];
    let ganreValid = '';
    allGanres.filter(elm => {
        if (elm.id === oneGanres) {
            genres.push(elm.name);
        }
    });

    for (const genre  of genres) {
        ganreValid += ` ${genre}`
    }

    return ganreValid;
 }

