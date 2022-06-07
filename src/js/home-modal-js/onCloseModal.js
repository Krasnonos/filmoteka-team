import { refs } from '../refs';

export function onCloseModal() {
  refs.modalBackdropRef.classList.add('is-hidden');
  refs.bodyRef.classList.remove('modal-open');
  const modalRef = document.querySelector('.modal__box .modal');
  modalRef.remove();
}
