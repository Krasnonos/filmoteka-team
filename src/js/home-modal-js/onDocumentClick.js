import { getResultData } from '../popular-movies/data-result';
import { spinnerOff } from '../spinner-js/spinner';
import { getCardElement } from './getCardElement';
import { getCurrentModalDataFromLocalArray } from './getCurrentModalDataFromLocalArray';
import { getModalData } from './getModalData';
import { showModal } from './showModal';

export function onDocumentClick(event) {
  const elementRef = getCardElement(event);
  if (elementRef.hasAttribute('data-filmid')) {
    const id = elementRef.dataset.filmid;

    // нова логіка отримання даних для модального вікна (без завантаження даних з сервера)
    const currentModalData = getCurrentModalDataFromLocalArray(id);
    showModal(currentModalData);

    // відключаем логіку отримання данних з сервера
    // getModalData(id).then(resp => {
    //   showModal(resp);
    //   spinnerOff();
    // });
  }
}
