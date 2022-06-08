import { refs } from '../refs';
import modalTemplate from '../../hbs-templates/modal-film.hbs';

export function showModal(data) {
  const markup = modalTemplate(data);
  refs.modalBoxRef.insertAdjacentHTML('beforeend', markup);
  refs.bodyRef.classList.add('modal-open');
  refs.modalBackdropRef.classList.remove('is-hidden');
}
