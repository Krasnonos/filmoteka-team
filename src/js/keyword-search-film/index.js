
import { getFilm } from "./getFilm";
import { standartindArrayFilms } from "./standart-array-films";
import { renderCards } from "./render-cards";
import { refs } from './refs-el';


refs.form.addEventListener('submit', onSearchFilmSubmitForm)

async function onSearchFilmSubmitForm (e) {
    e.preventDefault();

    refs.input.addEventListener('input', onChangeInput);

    let inputValue = e.currentTarget.elements.searchQuery.value;

    if (inputValue === '') {
        addAlert();
        return
    }

    const arrayFilms = await getFilm(inputValue);

    if (arrayFilms.length === 0) {        
        addAlert();
        return
    }
    
    const validFilmsArray = standartindArrayFilms(arrayFilms);
    
    renderCards(validFilmsArray);

}

function addAlert() {
    refs.text.style.display = 'block';
    refs.text.textContent = 'Search result not successful. Enter the correct movie name and';
}

function onChangeInput(e) {
    refs.text.style.display = 'none';
}