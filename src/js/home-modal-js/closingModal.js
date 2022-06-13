import { refs } from '../refs';



  window.addEventListener('keydown', event => { 
    event.preventDefault();
    if (event.code === "Escape") { 
        refs.modalBackdropRef.classList.add('is-hidden');
        refs.bodyRef.classList.remove('modal-open');
        const modalRef = document.querySelector('.modal__box .modal');
        modalRef.remove();
    };
  });

document.addEventListener('click', event => {
 if (event.target === refs.modalBackdropRef) {
  refs.modalBackdropRef.classList.add('is-hidden');
  refs.bodyRef.classList.remove('modal-open');
  const modalRef = document.querySelector('.modal__box .modal');
  modalRef.remove();
 }; 
});