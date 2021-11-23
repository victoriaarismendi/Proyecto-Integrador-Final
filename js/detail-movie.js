let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');


let url = `https://api.themoviedb.org/3/movie/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`


fetch (url)
    .then (function (response) {
        return response.json ();

    })
    .then (function (data) {
        console.log(data);
       
        //capturamos elementos del DOM
        let image = document.querySelector ('img');
        let title = document.querySelector ('.tituloPrincipal')        
        let raiting = document.querySelector ('.raiting');
        let fecha = document.querySelector ('.fecha');
        let sinopsis = document.querySelector ('.datosPelicula');
        let duracion = document.querySelector ('.duracion');

       image.src =`https://image.tmdb.org/t/p/w342${data.poster_path}`;

       title.innerText+= data.title;
       raiting.innerText+= data.vote_average;
       duracion.innerText+= data.runtime;
       fecha.innerText+= data.release_date;
       sinopsis.innerText+= data.overview;

        


        let generos= ""
        let info = data 
        let capturo= document.querySelector (".generos")
        for (let i=0; i<info.genres.length; i++) {                                  
            console.log(info.genres[i].name);
            generos += ` <p> Género: </p>
           <a href="./detail-genres.html?id=${info.genres[i].id}"> ${info.genres[i].name}</a>
           `
           
           

        }
        //reenviar datos actualizados al DOM
        capturo.innerHTML = generos
           

    })

//favoritos

//crear un array
let favoritos = [];

//recupero el storage
let recuperoStorage = localStorage.getItem ('favoritos');
if (recuperoStorage !=null) {
    //transformamos en cadena de texto y lo guardamos en favoritos
    favoritos = JSON.parse(recuperoStorage);
}
console.log(favoritos);
 
 
//hacer click en el link  - primero debemos capturar el elemento
let fav = document.querySelector ('.fav')

//preguntar si un id esta en favoritos
if (favoritos.includes(id)) {
    fav.innerText="Quitar de favoritos";
 } 

fav.addEventListener ('click', function (evento) {
    evento.preventDefault ();

    //preguntar si esta en el array
    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf (id); //buscar donde esta
        //borrar un elemento a partir del indice
        favoritos.splice (indice,1)
        fav.innerText="Agregar a favoritos" 
    } else {
        //agregar un dato al array
        favoritos.push(id); //el id es el dato que necesitamos para pedir un detalle y se encuentra en la url
        fav.innerText="Quitar de favoritos";
    }

//guardar el array en el storage 
//primero lo pasamos a json y despues lo guardamos, el storage no me deja guardar un array
let favsToString = JSON.stringify(favoritos); 
localStorage.setItem('favoritos', favsToString); 

console.log(localStorage);

})





    
