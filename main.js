const inputSearch = document.querySelector("#inputSearch");
const searchButton = document.querySelector("#searchButton");
const form = document.querySelector("#form")

const movieApi = new MovieAPI();

runEvetListeners();

function runEvetListeners(){
    document.addEventListener("DOMContentLoaded", movieApi.getPopularMovie())
    searchButton.addEventListener("click", getMovieByName);
    form.addEventListener("submit", getMovieByName);
}

function getMovieByName(e){
    const movieName = inputSearch.value.trim();
    movieApi.getMoviesByName(movieName);

    e.preventDefault();
}

