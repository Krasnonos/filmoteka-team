import { getResultData } from '../popular-movies/data-result';
import { spinnerOff, spinnerOn } from '../spinner-js/spinner';
import { getCardElement } from './getCardElement';
import { getCurrentModalDataFromLocalArray } from './getCurrentModalDataFromLocalArray';
import { getModalData } from './getModalData';
import { showModal } from './showModal';

export function onDocumentClick(event) {
  console.log(event.target);
  if (
    event.target.classList.contains(
      'remove-film-svg' || event.target.classList.contains('remove-film-btn')
    )
  ) {
    return;
  }
  const elementRef = getCardElement(event);
  if (elementRef.hasAttribute('data-filmid')) {
    const id = elementRef.dataset.filmid;

    // нова логіка отримання даних для модального вікна (без завантаження даних з сервера)
    const currentModalData = getCurrentModalDataFromLocalArray(id);
    if (currentModalData) {
      showModal(currentModalData);
    } else {
      spinnerOn();
      getModalData(id).then(resp => {
        showModal(resp);
        spinnerOff();
      });
    }
  }
}
