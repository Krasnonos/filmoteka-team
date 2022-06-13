// 1) Отримати посилання на DOM елементи. +
// 2) Стукаємося до LocalStorage і отримуємо масив id. +
// 3) Робимо запит на сервер по ids.
// 4) Отримуємо данні з сервера.
// 5) Рендерим розмітку карток фільмів.
// 6) Записуємо данні з сервера для подальшого використання карток.
// 7) Додатково зробити перевірку, якщо LocalStorage порожній рендерим текст, що переглянутих фільмів ще немає у Library.
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
