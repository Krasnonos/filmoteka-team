console.log('hello this is keyword-search-film');
import KeywordSearchFilmServise from './servise-keyword-search-film';


const keywordSearchFilmServise = new KeywordSearchFilmServise;

const refs = {
    form: document.querySelector('.home-header_search'),
    input: document.querySelector('.home-header_search_input'),
    btn: document.querySelector('.home-header_search_button')
};

refs.form.addEventListener('submit', onSearchFilmSubmitForm)

async function onSearchFilmSubmitForm (e) {
    e.preventDefault();

    let inputValue = e.currentTarget.elements.searchQuery.value;

    keywordSearchFilmServise.query = inputValue;
    
    const res = await keywordSearchFilmServise.getFilm();
    const arrayFilms = res.data.results;

console.log(arrayFilms);
}
