/*let series = [];

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

section_pelicula.innerHTML = articulos_pelicula; */

//favoritos peliculas
//recupero storage y transformo en array
let recuperoStorageS = localStorage.getItem ('favoritos');
let favoritos = JSON.parse (recuperoStorageS);
console.log(favoritos);

//capturar el contenedor de los elementos a mostrar
let section = document.querySelector ('.peliculas');
let peliculasFavoritas = '' //la rellenamos con cada vuelta del for, para poder tener los datos adentro

//si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados
if (favoritos == null || favoritos.length ==0) {
    section.innerHTML= '<h1>No hay favoritos seleccionados </h1>'
} else {
    //for para recorrer el array
    for (let i=0; i<favoritos.length; i++) {
        buscarYMostrarFavoritos (favoritos[i]);
    }
}
function buscarYMostrarFavoritos(id) {
    //fetch para buscar los elementos del array
    let url =  `https://api.themoviedb.org/3/movie/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`

    fetch(url)
        .then (function (response) {
            return response.json ()
         })
        .then (function (data) {
            console.log(data);
            peliculasFavoritas += `
                <article class="pelicula">
                    <a href="detail-movie.html?id=${data.id}">
                     <img src="https://image.tmdb.org/t/p/w342/${data.poster_path }" alt="The Duff">
                    <p>${data.original_title }</p>
                    <p>${data.release_date}<p>
                    </a>
                </article>
                     `
            //mostrarlo al usuario
            section.innerHTML = peliculasFavoritas;
        })
        .catch (function (error) {
            console.log(error);
        })
}



//favoritos series
//recupero storage y transformo en array
let recuperoStorage = localStorage.getItem ('favoritosSeries');
let favoritosSeries = JSON.parse (recuperoStorage);
console.log(favoritosSeries);

//capturar el contenedor de los elementos a mostrar
let sectionS = document.querySelector ('#series');
let seriesFavoritas = '' //la rellenamos con cada vuelta del for, para poder tener los datos adentro

//si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados
if (favoritosSeries == null || favoritosSeries.length ==0) {
    sectionS.innerHTML= '<h1>No hay favoritos seleccionados </h1>'
} else {
    //for para recorrer el array
    for (let i=0; i<favoritosSeries.length; i++) {
        buscarYMostrarFavoritosSeries (favoritosSeries[i]);
    }
}
function buscarYMostrarFavoritosSeries(id) {
    //fetch para buscar los elementos del array
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36` 

    fetch(url)
        .then (function (response) {
            return response.json ()
         })
        .then (function (data) {
            console.log(data);
            seriesFavoritas += `<article class="pelicula">
            <a href="detail-series.html?id=${ data.id }">
                <img src="https://image.tmdb.org/t/p/w342/${ data.poster_path }" alt="The Duff">
                <p>${ data.original_name }</p>
                <p>${data.first_air_date}<p>
            </a>
        </article>
        `
        //mostrarlo al usuario
            sectionS.innerHTML = seriesFavoritas;
        })
        .catch (function (error) {
            console.log(error);
        })
}
    


    





