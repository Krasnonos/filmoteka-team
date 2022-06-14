import { refs } from '../refs';
import { onCloseModal } from './onCloseModal';

export function onKeyDown(event) {
  event.preventDefault();
  if (event.code === 'Escape') {
    onCloseModal();
    window.removeEventListener('keydown', onKeyDown);
  }
}

export function onBackDropClick(event) {
  if (event.target === refs.modalBackdropRef) {
    onCloseModal();
    document.removeEventListener('click', onBackDropClick);
  }
}
