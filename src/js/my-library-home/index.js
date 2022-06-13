import { getLocalStorageWatched } from './get-local-storage';
import { requestIds } from './request-ids';
import { createMarkup } from './create-markup';
import { refs } from '../refs-el/refs-el';

document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  const ids = getLocalStorageWatched();
  renderIds(ids);
}

export async function renderIds(ids) {
  try {
    let markup = '';

    for (let index = 0; index < ids.length; index++) {
      const response = await requestIds(ids[index]);
      markup += createMarkup(response.data);
    }

    refs.galleryListEl.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {}
}
