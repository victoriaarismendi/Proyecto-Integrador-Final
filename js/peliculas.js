window.addEventListener("load", function () {
    //Películas populares 
 
let peliculas_populares = 'https://api.themoviedb.org/3/movie/popular?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';

//Lo más visto en películas

let mas_visto_peliculas = 'https://api.themoviedb.org/3/movie/now_playing?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US';

//Películas más valoradas

let peliculas_mas_valoradas = 'https://api.themoviedb.org/3/movie/top_rated?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';
fetch(peliculas_populares)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#todas-las-pelis');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let pelicula = response.results;
            articulos += `
            <article class="pelicula">
                <a href="detail-movie.html?id=${pelicula[i].id}">
                    <img src="https://image.tmdb.org/t/p/w342/${ pelicula[i].poster_path }" alt="The Duff">
                    <p>${ pelicula[i].original_title }</p>
                    <p>${pelicula[i].release_date}<p>
                </a>
            </article>
            `
        }

        section.innerHTML = articulos;

    })

fetch(mas_visto_peliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#peliculas-mas-vistas');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let pelicula = response.results;

            articulos += `
            <article class="pelicula">
                <a href="detail-movie.html?id=${ pelicula[i].id }">
                    <img src="https://image.tmdb.org/t/p/w342/${ pelicula[i].poster_path }" alt="The Duff">
                    <p>${ pelicula[i].original_title }</p>
                    <p>${pelicula[i].release_date}<p>
                </a>
            </article>
            `
        }

        section.innerHTML = articulos;

    })

fetch(peliculas_mas_valoradas)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#peliculas-mas-valoradas');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let pelicula = response.results;

            articulos += `
            <article class="pelicula">
                <a href="detail-movie.html?id=${ pelicula[i].id }">
                    <img src="https://image.tmdb.org/t/p/w342/${ pelicula[i].poster_path }" alt="The Duff">
                    <p>${ pelicula[i].original_title }</p>
                    <p>${pelicula[i].release_date}<p>
                </a>
            </article>
            `
        }

        section.innerHTML = articulos;

    })
})
