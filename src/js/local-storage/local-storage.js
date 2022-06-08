import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY_WATCHED = 'watched-films';
const STORAGE_KEY_QUEUE = 'queue-films';

let filmsWatched = [];
let filmsQueue = [];

export function onBtnWatchedClick() {

const filmId = document.querySelector('#film-id').getAttribute("data-movie-id");

  if (filmsWatched.includes(filmId)) {
      Notify.info('The movie has already been added to watched.');
    return;
  }
    filmsWatched.push(filmId);    
    Notify.success('The movie has been added to the list of watched.');
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(filmsWatched));
}

export function onBtnQueueClick() {        

const filmId = document.querySelector('#film-id').getAttribute("data-movie-id");
    
  if (filmsQueue.includes(filmId)) {
      Notify.info('The movie has already been added to the queue.');
    return;
  }
    filmsQueue.push(filmId);    
    Notify.success('The movie has been added to the queue list.');
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(filmsQueue));
}