import { genreIds } from '../ganre-ids';

const adviceForm = document.querySelector('select[id="ganre"]');

function createSelectBtn(genreIds) {
  return genreIds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
}

adviceForm.insertAdjacentHTML('afterbegin', createSelectBtn(genreIds));
