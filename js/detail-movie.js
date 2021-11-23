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
            generos +=
           `<a href="./detail-genres.html?id=${info.genres[i].id}">Ver más peliculas del genero ${info.genres[i].name}</a>
           `
           

        }
        //reenviar datos actualizados al DOM
        capturo.innerHTML = generos
           

    })

    //crear array
    let peliculasFavoritas = []

    let recuperoStorage = localStorage.getItem('peliculasFavoritas')

    //Reviso si el id ya esta en favoritos
    if (recuperoStorage != null || peliculasFavoritas.length == 0) {
        peliculasFavoritas = JSON.parse (recuperoStorage);
     }

     //Capturar el elemento. Click en el link
     let fav = document.querySelector ('#button');
     fav.innerText = 'Agregar a favoritos';

     //fijarme que id este en el array - controlar antes de entregar me salia error
     if (peliculasFavoritas.includes(id)) {
         fav.innerText = 'Quitar de favoritos';
     }

     fav.addEventListener ('click', function (evento) {
         evento.preventDefault ();

         if (peliculasFavoritas.includes(id)) {
             //id en el array
             let indice = peliculasFavoritas.indexOf(id);

             //borrar de favoritos
             peliculasFavoritas.splice(indice, 1);
             fav.innerText = 'Agregar a favoritos';
         }
         else { //guardamos y agregar un dato al array
             peliculasFavoritas.push (id);
             fav.innerText = 'Quitar de favoritos';
         }
         console.log(peliculasFavoritas);

         //guardar el array en el storage
         let favsToString = JSON.stringify(peliculasFavoritas);
         localStorage.setItem('peliculasFavoritas', favsToString);

         console.log(localStorage);
     }) 

    
