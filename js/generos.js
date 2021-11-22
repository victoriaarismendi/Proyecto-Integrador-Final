/*let qs = location.search;
let qsto = new URLSearchParams (qs);
let id = qsto.get ('id');*/


//genero peliculas
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`

//estructura basica
fetch (url)
    .then (function (response) {
        return response.json ()
        
    })
    .then (function (data) {
        console.log(data.genres);
        let info = data.genres
        let genero = document.querySelector ('.listaGenero') //capturo el elemento del DOM 
        let elementosDeLista = ''

        for (let i=0; i<info.length; i++) {
            elementosDeLista += `<li> ${info [i].name} <li>`

            /*articulos += `
            <a href="detail-genres.html?id=${detail-genres.id}">
            `*/
        }
        
        
        //meto la variable dentro del ul
        genero.innerHTML = elementosDeLista
    })
    .catch (function (error) {
        console.log(error);
    })


    
//crear un array
let genres = []

//recupero el storage
let recuperoStorage = localStorage.getItem('genres')
if (recuperoStorage !=null) {
    genres = JSON.parse (recuperoStorage);
    console.log(genres);
}


//guardar el array en el storage
let genresToString = JSON.stringify (genres);
localStorage.setItem ('genres', genresToString);
console.log(localStorage);


//genero series
let urlSerie = `https://api.themoviedb.org/3/genre/tv/list?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`

//estructura basica
fetch (urlSerie)
    .then (function (response) {
        return response.json ()
        
    })
    .then (function (data) {
        console.log(data.genres);
        let infoSerie = data.genres
        let generoSerie = document.querySelector ('.genero') //capturo el elemento del DOM 
        let elementosDeLista = ''

        for (let i=0; i<infoSerie.length; i++) {
            elementosDeLista += `<li> ${infoSerie [i].name} <li>`

           /* articulos += 
            `
            <article> 
            <a href="detail-genres.html?id=${generos.id}" > </a>
            </article> `*/
        }
        
        //meto la variable dentro del ul
        generoSerie.innerHTML += elementosDeLista
    })
    .catch (function (error) {
        console.log(error);
    })



