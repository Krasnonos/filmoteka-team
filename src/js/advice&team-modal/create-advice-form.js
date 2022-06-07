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

{
  /* <div class="advice-block">
  <p class="advice-block__text">
    Repudiandae, debitis facere dignissimos omnis sit, aspernatur.
  </p>
  <div class="advice-list__wrap">
    <button
      type="button"
      class="advice-list__nav-btn advice-list__nav-btn--left"
    >
      <svg class="advice-list__svg" width="30" height="30">
        <use href="./images/icons.svg#icon-undo-left"></use>
      </svg>
    </button>
    <ul class="advice-list"></ul>
    <button
      type="button"
      class="advice-list__nav-btn advice-list__nav-btn--right"
    >
      <svg class="advice-list__svg" width="30" height="30">
        <use href="./images/icons.svg#icon-redo-right"></use>
      </svg>
    </button>
  </div>
</div>; */
}
