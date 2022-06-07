export default function randomFilm(filmsArray) {
  const minNumber = 0;
  const maxNumber = filmsArray.length - 1;
  const randomFilmNumber = Math.round(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
  return filmsArray[randomFilmNumber];
}
