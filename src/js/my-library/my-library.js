import axios from 'axios';
import filmCardLibraryhbs from "../../hbs-templates/"

(`.galleryList`)

const watchedBtn = document.querySelector(`#watched`);
const queueBtn = document.querySelector(`#queue`);
const galleryList = document.querySelector(`.gallery-List`);
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

queueBtn.addEventListener('click', renderFilm);
watchedBtn.addEventListener('click', renderFilm);

async function renderFilm(e) {
  const lockalStorageKey = e.currentTarget.dataset.key;
  const filmsArrayJson = localstorage.getitem(lockalStorageKey);
  const filmsArray = JSON.parse(filmsArrayJson)
  if (filmsArray.length === 0) {
       return
  }

  const filmsData = await filmsArray.map((id) => axios(`https://api.themoviedb.org/3/movie/${id}?api_key=c8ef48bae82b60cf66a4f0e6e3dd153e&language=en-US`));
  const filmCardArray = filmsData.map((film) => filmCardLibraryhbs(film)).join('')

  galleryList.insertAdjacentHTML('beforeend', filmCardArray)


  if (e.currentTarget.getAttribute(`id`) === `watched`) {
    watchedPlaceholder.style.display = 'none';
} else {queuePlaceholder.style.display = 'none';}
}






// function drawQueueFilmList() {
//   let fragment = document.createDocumentFragment();
//   let queueFilmListFromLS = localStorage.getItem('filmsQueue');
//   if (queueFilmListFromLS !== null && JSON.parse(queueFilmListFromLS).length !== 0) {
//     JSON.parse(queueFilmListFromLS).forEach(movie => {
//       fragment.append(createLibraryCardFunc(movie.backdrop_path, movie.title, movie.id, movie.vote_average))
//     })
//     libraryFilmList.innerHTML = "";
//     libraryFilmList.append(fragment);
//   } else if (queueFilmListFromLS === null || JSON.parse(queueFilmListFromLS).length === 0) {
//     libraryFilmList.innerHTML = "";
//     const listItem = document.createElement('li');
//     listItem.classList.add('main__noFilmsInList');
//     listItem.textContent = "You do not have to queue movies to watch. Add them."
//     libraryFilmList.append(listItem);
//   }
//   queueListButton.classList.add('main__navigationLibraryButtonActive');
//   watchedListButton.classList.remove('main__navigationLibraryButtonActive');
// }

// function drawWatchedFilmList() {
//   let fragment = document.createDocumentFragment();
//   let watchedFilmListFromLS = localStorage.getItem('filmsWatched');
//   if (watchedFilmListFromLS !== null && JSON.parse(watchedFilmListFromLS).length !== 0) {
//     JSON.parse(watchedFilmListFromLS).forEach(movie => {
//       fragment.append(createLibraryCardFunc(movie.backdrop_path, movie.title, movie.id, movie.vote_average))
//     });
//     libraryFilmList.innerHTML = "";
//     libraryFilmList.append(fragment);
//   } else if (watchedFilmListFromLS === null || JSON.parse(watchedFilmListFromLS).length === 0) {
//     libraryFilmList.innerHTML = "";
//     const listItem = document.createElement('li');
//     listItem.classList.add('main__noFilmsInList');
//     listItem.textContent = "You do not have watched movies. Add them."
//     libraryFilmList.append(listItem);
//   }
//   queueListButton.classList.remove('main__navigationLibraryButtonActive');
//   watchedListButton.classList.add('main__navigationLibraryButtonActive');
// }