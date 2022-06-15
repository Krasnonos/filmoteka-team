import getFilmInfoById from './get-films-info-by-id';
import createMarkup from './create-library-markup';
import { setCurrentFilmsData } from './current-films-data';

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
const galleryList = document.querySelector('.gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

queueBtn.addEventListener('click', showFilms);
watchedBtn.addEventListener('click', showFilms);
document.addEventListener('DOMContentLoaded', firstShowFilms);

async function firstShowFilms(e) {
  try {
    const localStorageKey = watchedBtn.dataset.key;
    const filmsArrayJson = localStorage.getItem(localStorageKey);
    const filmsArray = JSON.parse(filmsArrayJson);

    if (!filmsArray) {
      galleryList.innerHTML = '';
      return;
    }

    const PromisesFilmData = await filmsArray.map(id => getFilmInfoById(id));
    const filmsResponse = await Promise.all(PromisesFilmData);
    const filmsData = filmsResponse.map(film => film.data);
    galleryList.innerHTML = createMarkup(filmsData);
    setCurrentFilmsData(filmsData);
    hidePlaceholder(localStorageKey);
  } catch (error) {
    console.log(error);
  }
}

async function showFilms(e) {
  try {
    const localStorageKey = e.currentTarget.dataset.key;
    const filmsArrayJson = localStorage.getItem(localStorageKey);
    const filmsArray = JSON.parse(filmsArrayJson);

    if (!filmsArray) {
      galleryList.innerHTML = '';
      return;
    }

    const PromisesFilmData = await filmsArray.map(id => getFilmInfoById(id));
    const filmsResponse = await Promise.all(PromisesFilmData);
    const filmsData = filmsResponse.map(film => film.data);
    galleryList.innerHTML = createMarkup(filmsData);
    setCurrentFilmsData(filmsData);
    hidePlaceholder(localStorageKey);
  } catch (error) {
    console.log(error);
  }
}

function hidePlaceholder(key) {
  if (key === `watched-films`) {
    watchedPlaceholder.style.display = 'none';
  } else {
    queuePlaceholder.style.display = 'none';
  }
}
