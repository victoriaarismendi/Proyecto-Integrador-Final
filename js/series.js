window.addEventListener("load", function () {
    //Películas populares 
 
let peliculas_populares = 'https://api.themoviedb.org/3/movie/popular?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';

//Lo más visto en películas

let mas_visto_peliculas = 'https://api.themoviedb.org/3/movie/now_playing?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US';

//Películas más valoradas

let peliculas_mas_valoradas = 'https://api.themoviedb.org/3/movie/top_rated?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';

//Lo más visto en series

let series_populares = 'https://api.themoviedb.org/3/tv/popular?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';

//Series populares 

let mas_visto_series = 'https://api.themoviedb.org/3/tv/popular?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1'

//Series más valoradas

let series_mas_valoradas = 'https://api.themoviedb.org/3/tv/top_rated?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';
fetch(series_populares)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#Todas-las-series');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let serie = response.results;
            console.log(response.results);
            
            articulos += 
            `      <article class="pelicula">
                    <a href="detail-series.html?id=${ serie[i].id }">
                        <img src="https://image.tmdb.org/t/p/w342/${ serie[i].poster_path }" alt="The Duff">
                        <p>${ serie[i].original_name }</p>
                        <p>${serie[i].first_air_date}<p>
                    </a>
                </article>
                `

        }

        section.innerHTML = articulos;

    })

fetch(mas_visto_series)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#series-mas-vistas');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let serie = response.results;

                articulos += `
                <article class="pelicula">
                    <a href="detail-series.html?id=${ serie[i].id }">
                        <img src="https://image.tmdb.org/t/p/w342/${ serie[i].poster_path }" alt="The Duff">
                        <p>${ serie[i].original_name }</p>
                        p>${serie[i].first_air_date}<p>
                    </a>
                </article>
                `

        }

        section.innerHTML = articulos;

    })

fetch(series_mas_valoradas)
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        let section = document.querySelector('#series-mas-valoradas');

        let articulos = '';

        for(let i = 0; i < response.results.length; i++) {

            let serie = response.results;

                articulos += `
                <article class="pelicula">
                    <a href="detail-series.html?id=${serie[i].id}">
                        <img src="https://image.tmdb.org/t/p/w342/${serie[i].poster_path}" alt="The Duff">
                        <p>${serie[i].original_name }</p>
                        p>${serie[i].first_air_date}<p>
                    </a>
                </article>
                `

        }

        section.innerHTML = articulos;

    })
})
