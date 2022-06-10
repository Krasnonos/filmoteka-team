export function setLocalStoragePopular(data) {
  localStorage.setItem('popular', JSON.stringify(data));
}
export function getLocalStoragePopular() {
  const popular = localStorage.getItem('popular');
  return JSON.parse(popular);
}
