const currentFilmsDataList = [];

function setCurrentFilmsData(filmsData) {
  try {
    filmsData.array.forEach(film => {
      return currentFilmsDataList.push(film);
    });
  } catch (error) {}
}

function getCurrentFilmsData() {
  return currentFilmsDataList;
}

function clearCurrentFilmsData() {
  currentFilmsDataList = null;
}

export { setCurrentFilmsData, getCurrentFilmsData, clearCurrentFilmsData };

console.log(currentFilmsDataList);
