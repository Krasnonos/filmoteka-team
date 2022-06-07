import { requestPopularMovies } from './request-popular-movies';
import { createMarkup } from './create-markup';
import { refs } from '../refs-el/refs-el';
document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  try {
    const response = await requestPopularMovies(1);
    const results = await response.data.results;
    refs.galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(results));
  } catch (error) {
    refs.galleryListEl.insertAdjacentHTML(
      'afterbegin',
      'No connection to server!!!'
    );
  }
}
