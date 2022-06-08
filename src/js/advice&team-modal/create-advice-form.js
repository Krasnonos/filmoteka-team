import './scroll-advice-list';
import { genreIds } from './ganre-ids-for-advice';

const adviceListEl = document.querySelector('.advice-list');

function createSelectBtn(genreIds) {
  return genreIds
    .map(({ id, name }) => {
      return `<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="${id}">${name}</button></li>`;
    })
    .join('');
}

adviceListEl.insertAdjacentHTML('beforeend', createSelectBtn(genreIds));
