import axios from 'axios';
import modalTemplate from '../../hbs-templates/modal-film.hbs';
import { refs } from '../refs';
import { svgSprite } from '../../images/icons.svg';

const KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';
const BASE_URL = `https://api.themoviedb.org/3/movie/18`;
const BASE_URL_CONFIG = 'https://api.themoviedb.org/3/configuration';

const options = {
  params: {
    api_key: KEY,
  },
};

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};

const searchInstance = axios.create({
  baseURL: BASE_URL,
  https: config,
});
const searchInstanceConfig = axios.create({
  baseURL: BASE_URL_CONFIG,
  https: config,
});

async function fetchSeachRequest(searchInstance) {
  return await searchInstance.get('', options);
}

function homeModalJS() {
  async function getModalData() {
    const config = await fetchSeachRequest(searchInstanceConfig);
    const movie = await fetchSeachRequest(searchInstance);
    // console.log(config);
    // console.log(movie.data);
    const posterImageSRC =
      config.data.images.secure_base_url +
      config.data.images.poster_sizes[3] +
      movie.data.poster_path;
    movie.data.absolut_poster_path = posterImageSRC;
    movie.data.genre = movie.data.genres[0].name;
    movie.data.original_title_to_UpperCase =
      movie.data.original_title.toUpperCase();
    movie.data.popularity_to_Fixed = movie.data.popularity.toFixed(1);

    return movie.data;
  }

  getModalData().then(resp => {
    const markup = modalTemplate(resp);
    refs.modalBackdropRef.insertAdjacentHTML('beforeend', markup);
    const showModalButtonRef = document.querySelector(
      '.modal .modal__close-button'
    );

    showModalButtonRef.addEventListener('click', () => {
      // console.log('click');
      refs.modalBackdropRef.classList.toggle('is-hidden');
      refs.bodyRef.classList.toggle('modal-open');
    });
  });

  refs.bodyRef.classList.add('modal-open');
  // refs.modalBackdropRef.classList.add('is-hidden');
}

homeModalJS();
