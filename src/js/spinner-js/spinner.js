import { refs } from '../refs';

window.onload = function () {
  setTimeout(function () {
    refs.backdropSpinnerRef.classList.add('is-hidden');
  }, 1000);
};

export function spinnerOff() {
  setTimeout(function () {
    refs.backdropSpinnerRef.classList.add('is-hidden');
  }, 1000);
}

export function spinnerOn() {
  refs.backdropSpinnerRef.classList.remove('is-hidden');
}
