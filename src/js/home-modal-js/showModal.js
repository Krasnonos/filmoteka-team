import { refs } from '../refs';
import modalTemplate from '../../hbs-templates/modal-film.hbs';
import { onBtnWatchedClick, onBtnQueueClick } from '../local-storage/local-storage'

export function showModal(data) {
  const markup = modalTemplate(data);
  refs.modalBoxRef.insertAdjacentHTML('beforeend', markup);
  refs.bodyRef.classList.add('modal-open');
  refs.modalBackdropRef.classList.remove('is-hidden');

  //-----------------Local Storage---------------------------
  const btnWatched = document.querySelector('.add-to-watched-button');
  const btnQueue = document.querySelector('.add-to-queue-button');

  btnWatched.addEventListener('click', onBtnWatchedClick);
  btnQueue.addEventListener('click', onBtnQueueClick);
}