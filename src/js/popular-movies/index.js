import { requestPopularMovies } from './request-popular-movies';
import { createMarkup } from './create-markup';
import { refs } from '../refs-el/refs-el';
import { setResultData } from './data-result';
document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  try {
    const response = await requestPopularMovies(1);
    const results = response.data.results;
    refs.galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(results));
    setResultData(results);
    return results;
  } catch (error) {
    refs.galleryListEl.insertAdjacentHTML(
      'afterbegin',
      '<li class="gallery-list__error">No connection to server!!!</li>'
    );
  }
}
