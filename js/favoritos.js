let series = [];

let storageSeries = localStorage.getItem('series');

if(storageSeries != null) {
    series = JSON.parse(storageSeries);
}

let section_serie = document.querySelector('#series');

let articulos_serie = '';

for(let i = 0; i < series.length; i++) {

    let serie = series[i];

    if(serie.backdrop_path != null) {
        articulos_serie += `
        <article class="pelicula">
            <a href="detail-series.html?id=${ serie.id }">
                <img src="https://image.tmdb.org/t/p/w342/${ serie.backdrop_path }" alt="The Duff">
                <p>${ serie.original_name }</p>
            </a>
        </article>
    `
    }
}

section_serie.innerHTML = articulos_serie;

///////peliculas

let peliculas = [];

let storagePeliculas = localStorage.getItem('peliculas');


if(storagePeliculas != null) {
    peliculas = JSON.parse(storagePeliculas);
}

let section_pelicula = document.querySelector('#peliculas');

let articulos_pelicula = '';

for(let i = 0; i < peliculas.length; i++) {

    let pelicula = peliculas[i];

    if(pelicula.backdrop_path != null) {
        articulos_pelicula += `
        <article class="pelicula">
            <a href="detail-movie.html?id=${ pelicula.id }">
                <img src="https://image.tmdb.org/t/p/w342/${ pelicula.backdrop_path }" alt="The Duff">
                <p>${ pelicula.original_title }</p>
            </a>
        </article>
        `
    }

}

section_pelicula.innerHTML = articulos_pelicula;