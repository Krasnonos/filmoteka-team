console.log('hello this is keyword-search-film');
import KeywordSearchFilmServise from './servise-keyword-search-film';
import cardTpl from '../../hbs-templates/film-card-home-page.hbs'


const keywordSearchFilmServise = new KeywordSearchFilmServise;

const refs = {
    galleryList: document.querySelector('.gallery-list'),
    form: document.querySelector('.home-header_search'),
    input: document.querySelector('.home-header_search_input'),
    btn: document.querySelector('.home-header_search_button')
};

refs.form.addEventListener('submit', onSearchFilmSubmitForm)

async function onSearchFilmSubmitForm (e) {
    e.preventDefault();

    let inputValue = e.currentTarget.elements.searchQuery.value;

    keywordSearchFilmServise.query = inputValue;
    
    const res = await keywordSearchFilmServise.getFilm();
    const arrayFilms = res.data.results;

    const validFilmsArray = standartindArrayFilms(arrayFilms);

    console.log(validFilmsArray);
    

}

function renderCards(cards) {
    const marcup = cards.map(card => cardTpl(card)).join('');
    //  refs.gallery.insertAdjacentHTML('beforeend', marcup)
}

function standartindArrayFilms(films) {
    return films.map(({id, original_title, genre_ids, poster_path, release_date }) => {
        return {
            id: id,
            posterSrc: poster_path,
            title: original_title,
            ganres: genre_ids,
            relisYer: release_date
        }
    })
}




// <li class="gallery-list__item">
//     <div data-filmId="{{id}}" class="gallery-list__card">
//         <div class="gallery-list__poster">
//             <img class="gallery-list__img" src="https://image.tmdb.org/t/p/original%7B%7BurlImg%7D%7D" alt="{{title}}" loading="lazy" />
//         </div>

//         <div class="gallery-list__description">
//             <h2 class="gallery-list__titel">{{title}}</h2>
//             <div class="gallery-list__info">

//                 <p class="gallery-list__genre">{{ganres}} | <span class="gallery-list__Year">{{relisYer}}</span> </p>

//             </div>
//             </div>
//     </div>
// </li>