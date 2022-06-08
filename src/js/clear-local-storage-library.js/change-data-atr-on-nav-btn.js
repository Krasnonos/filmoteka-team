const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

queueBtn.addEventListener('click', delateWatchedAtribbute);
watchedBtn.addEventListener('click', delateQueueAtribbute);

function delateWatchedAtribbute(e) {
  if (e.target.hasAttribute('data-current')) {
    return;
  }
  e.target.setAttribute('data-current', 'currentPage');
  watchedBtn.removeAttribute('data-current');

  watchedPlaceholder.style.display = 'none';
  queuePlaceholder.style.display = 'block';
}

function delateQueueAtribbute(e) {
  if (e.target.hasAttribute('data-current')) {
    return;
  }
  e.target.setAttribute('data-current', 'currentPage');
  queueBtn.removeAttribute('data-current');

  queuePlaceholder.style.display = 'none';
  watchedPlaceholder.style.display = 'block';
}

// -------------------
const clearBtn = document.querySelector('.clear-library-btn');
const libraryList = document.querySelector('.js-gallery-list');
const libreryPlaceholder = document.querySelector('.library-empty');

clearBtn.addEventListener('click', findLocalStorageKey);

function findLocalStorageKey(e) {
  const currentPage = document.querySelector(
    'button[data-current="currentPage"]'
  );
  const lockalStorageKey = currentPage.dataset.key;
  clearLocalStorageAndFilmList(lockalStorageKey);
}

function clearLocalStorageAndFilmList(lockalStorageKey) {
  localStorage.removeItem(lockalStorageKey);
  libraryList.innerHTML = '';
  libreryPlaceholder.classList.remove('is-hidden');
}

// -----------------------------------------//
// потрібно <button type="button" class="clear-btn">
//       clear list </button>
// на кнопку queue поставити  data-key="queueKey"
// на кнопку  watched поставити data-key="watchedKey" data-current="currentPage"
// на блок-заглушку queue поставити класс js-queue-text" та style="display: none"
// на блок-заглушку watched поставити класс js-watched-text
