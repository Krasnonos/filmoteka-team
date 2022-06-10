import { requestPopularMovies } from './request-popular-movies';
import { createMarkup } from './create-markup';
import { refs } from '../refs-el/refs-el';
import { setLocalStoragePopular } from './popular-local-storage';
document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  try {
    const response = await requestPopularMovies(1);
    const results = await response.data.results;
    refs.galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(results));
    setLocalStoragePopular(results);
  } catch (error) {
    refs.galleryListEl.insertAdjacentHTML(
      'afterbegin',
      '<li class="gallery-list__error">No connection to server!!!</li>'
    );
  }
}
