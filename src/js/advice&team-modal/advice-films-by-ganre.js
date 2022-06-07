import searchFilmByGanre from './search-film-by-ganre';
import randomFilm from './random-film';

const sumbitForm = document.querySelector('.advice-form');
const selectEl = document.querySelector('select[id="ganre"]');

sumbitForm.addEventListener('submit', adviceFilmByGanre);

async function adviceFilmByGanre(e) {
  e.preventDefault();

  const ganreId = selectEl.value;
  const filmsrespone = await searchFilmByGanre(ganreId);
  const adviceFilmsArray = await filmsrespone.data.results;
  const oneRandomFilm = await randomFilm(adviceFilmsArray);
  await console.log(oneRandomFilm);
}
