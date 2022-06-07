import searchFilmByGanre from './search-film-by-ganre';
import randomFilm from './random-film';
import modalFilmTemplate from '../../hbs-templates/modal-film.hbs';

const adviceListEl = document.querySelector('.advice-list');
const modalBackdrop = document.querySelector('.backdrop');

adviceListEl.addEventListener('click', adviceFilmByGanre);

async function adviceFilmByGanre(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  try {
    const ganreId = e.target.dataset.id;
    const filmsrespone = await searchFilmByGanre(ganreId);
    const adviceFilmsArray = filmsrespone.data.results;
    const oneRandomFilm = randomFilm(adviceFilmsArray);
    console.log(oneRandomFilm);
    modalBackdrop.innerHTML = modalFilmTemplate(oneRandomFilm);
    modalBackdrop.classList.remove('is-hidden');
  } catch (erroe) {
    console.log(error);
  }
}
