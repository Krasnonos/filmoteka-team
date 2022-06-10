import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY_WATCHED = 'watched-films';
const STORAGE_KEY_QUEUE = 'queue-films';

let filmsWatched = [];
let filmsQueue = [];

if (localStorage.getItem(STORAGE_KEY_WATCHED) != null) {
  filmsWatched = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
};

if (localStorage.getItem(STORAGE_KEY_QUEUE) != null) {
  filmsQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
};

Notify.init({
  width: '350px',
    success: {
      background: '#ff6b01'
   },
   info: {
      background: '#eb150c'
   },
  });

export function onBtnWatchedClick() {

const filmId = document.querySelector('.modal').getAttribute("data-movie-id");

  if (filmsWatched.includes(filmId)) {
      Notify.info('The movie has already been added to watched.');
    return;
  }
  
  filmsWatched.push(filmId);   
  Notify.success('The movie has been added to the list of watched.');
  localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(filmsWatched));
}

export function onBtnQueueClick() {        

const filmId = document.querySelector('.modal').getAttribute("data-movie-id");
    
  if (filmsQueue.includes(filmId)) {
      Notify.info('The movie has already been added to the queue.');
    return;
  }

    filmsQueue.push(filmId);    
    Notify.success('The movie has been added to the queue list.');
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(filmsQueue));
}