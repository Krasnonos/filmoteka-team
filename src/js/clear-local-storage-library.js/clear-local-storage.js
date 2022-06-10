// -------------------
const clearBtn = document.querySelector('.clear-library-btn');
const libraryList = document.querySelector('.js-gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

clearBtn.addEventListener('click', findLocalStorageKey);

function findLocalStorageKey(e) {
  const currentPage = document.querySelector(
    'button[data-current="currentPage"]'
  );
  const lockalStorageKey = currentPage.dataset.key;
  clearLocalStorageAndFilmList(lockalStorageKey);

  if (currentPage.id === 'watched') {
    watchedPlaceholder.classList.remove('is-hidden');
  } else {
    queuePlaceholder.classList.remove('is-hidden');
  }
}

function clearLocalStorageAndFilmList(lockalStorageKey) {
  localStorage.removeItem(lockalStorageKey);
  libraryList.innerHTML = '';
}

// -----------------------------------------//
// потрібно <button type="button" class="clear-library-btn">
//       clear list </button>
// на кнопку queue поставити  data-key="queueKey"
// на кнопку  watched поставити data-key="watchedKey" data-current="currentPage"
// на блок-заглушку queue поставити класс js-queue-text" та style="display: none"
// на блок-заглушку watched поставити класс js-watched-text
