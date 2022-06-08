import { spinnerOff } from '../spinner-js/spinner';
import { getCardElement } from './getCardElement';
import { getModalData } from './getModalData';
import { showModal } from './showModal';

export function onDocumentClick(event) {
  const elementRef = getCardElement(event);
  if (elementRef.hasAttribute('data-filmid')) {
    const id = elementRef.dataset.filmid;
    getModalData(id).then(resp => {
      showModal(resp);
      spinnerOff();
    });
  }
}
