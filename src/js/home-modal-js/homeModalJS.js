import { refs } from '../refs';
import { onCloseModal } from './onCloseModal';
import { onDocumentClick } from './onDocumentClick';

document.addEventListener('click', onDocumentClick);

refs.closeModalButtonRef.addEventListener('click', onCloseModal);
