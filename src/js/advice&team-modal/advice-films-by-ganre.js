// import searchFilmByGanre from './search-film-by-ganre';
// import randomFilm from './random-film';

// const adviceListEl = document.querySelector('.advice-list');

// adviceListEl.addEventListener('click', adviceFilmByGanre);

// async function adviceFilmByGanre(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const ganreId = e.target.dataset.id;
//   const filmsrespone = await searchFilmByGanre(ganreId);
//   const adviceFilmsArray = await filmsrespone.data.results;
//   const oneRandomFilm = await randomFilm(adviceFilmsArray);
//   await console.log(oneRandomFilm);
// }
