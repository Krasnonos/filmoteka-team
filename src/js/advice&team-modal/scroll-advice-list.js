const adviceListEl = document.querySelector('.advice-list');
const scrollLeftBtn = document.querySelector('.advice-list__nav-btn--left');
const scrollRightBtn = document.querySelector('.advice-list__nav-btn--right');

scrollRightBtn.addEventListener('click', scrollList);
scrollLeftBtn.addEventListener('click', scrollList);

function scrollList(e) {
  const MAX_SCROLL = Number(22);
  const MIN_SCROLL = Number(-22);

  let coordination = 0;
  const isRightBtn = e.currentTarget.classList.contains(
    'advice-list__nav-btn--right'
  );

  const intervalId = setInterval(() => {
    if (coordination == MAX_SCROLL || coordination == MIN_SCROLL) {
      clearInterval(intervalId);
      return;
    }

    if (isRightBtn) {
      coordination += 1;
    } else {
      coordination -= 1;
    }

    adviceListEl.scrollBy(coordination, 0);
  }, 30);
}
