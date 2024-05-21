class MovieAPI{
    constructor(){
        this.apiKey = "9a75b3b33b81b046434198c9a58b6b33";
        this.baseImageURL = "https://image.tmdb.org/t/p/w1280/";
        this.populerURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=tr-TR&sort_by=popularity.desc`;
        this.movies = document.querySelector(".movies");
        this.searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
    }

    async getPopularMovie(){
        const response = await fetch(this.populerURL);
        const data = await response.json();
        this.displayInfo(data);
    }

    async getMoviesByName(movieName){
        const response = await fetch(`${this.searchURL}${movieName}`);
        const data = await response.json();
        this.displayInfo(data);
    }

    displayInfo(movies){
        this.movies.innerHTML = "";

        movies.results.forEach(movie =>{
            this.movies.innerHTML+=`
            <div class="movie">
                <img class="moviePicture" src="${this.baseImageURL}${movie.poster_path}">
                <div class="info">
                    <h4 class="movieName">${movie.title}</h4>
                    <h5 class="imdbPoint ${this.changeColor(Math.round(movie.vote_average))}">${Math.round(movie.vote_average)}</h5>
                </div>
            </div>
            `
             console.log(movie);
        })
    }

    changeColor(imdbPoint){
        if(imdbPoint >= 8){
            return "green";
        }
        else if(imdbPoint >=6){
            return "yellow";
        }
        return "red";
    }
}