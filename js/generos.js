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
        console.log(data);
        let info = data.genres //array de los datos que vinieron de la API
        let genero = document.querySelector ('.genero') //capturo el elemento del DOM 
        let elementosDeLista = ''

       genero.style.color = "white";
       genero.style.decoration = "none";


        for (let i=0; i<info.length; i++) {
            elementosDeLista += `<article>
                                    <a href="./detail-genres.html?id=${info[i].id}"> 
                                    <li> ${info[i].name} <li>
                                    </a>
                                </article>` 

           
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
        console.log(data);
        let infoSerie = data.genres
        let generoSerie = document.querySelector ('.generoUno') //capturo el elemento del DOM 
        let elementosDeLista = '' //guardar lo que vayamos generando y despues pasarle al dom

       
        


        for (let i=0; i<infoSerie.length; i++) {
            elementosDeLista += `<article>
                                    <a href="./detail-genres.html?id=${infoSerie[i].id}">
                                    <li> ${infoSerie [i].name} <li>
                                    </a>
                                 </article>`

        }
        
        //meto la variable dentro del ul
        generoSerie.innerHTML += elementosDeLista
    })
    .catch (function (error) {
        console.log(error);
    })



