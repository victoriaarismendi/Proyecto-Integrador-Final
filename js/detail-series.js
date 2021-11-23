//pasos para la query string - sacar de la url los datos que quiero
let qs = location.search; //obtener la query desde la url
console.log(qs);
let qsto = new URLSearchParams (qs); //transformar la qs en objeto literal
let id = qsto.get ('id'); //obtener el dato del id del objeto literal


//armar un fecth para buscar los datos de la pelicula 
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`  //la parte del id va ir cambiando dependiendo del valor que obtenemos de la query string
fetch (url)
.then (function (response) {
        return response.json ();
    })
.then (function (data) {
    console.log(data);
        //capturar elementos del DOM
        let image = document.querySelector ('img');
        let title = document.querySelector ('.tituloPrincipal')
        let raiting = document.querySelector ('.raiting');
        let fecha = document.querySelector ('.fecha');
        let sinopsis = document.querySelector ('.datosSerie'); 

        //acumular los elementos de lista
        //let elementosLista = ''


        //actualizar los datos del dom - ver si lo pongo dentro del for
        image.src = `https://image.tmdb.org/t/p/w342${data.poster_path}`;
        title.innerText+= data.name;
        raiting.innerText+=data.vote_average;
        fecha.innerText+=data.first_air_date;
        sinopsis.innerText+=data.overview;        


        let generosSeries= ""
        let info = data 
        let capturo= document.querySelector (".generosSeries")
        for (let i=0; i<info.genres.length; i++) {
                                
            console.log(info.genres[i].name);
            generosSeries +=
            ` <p> Género: </p>
            <a href="./detail-genres.html?id=${info.genres[i].id}">${info.genres[i].name}</a>` 
        }
    //reenviar los datos actualizados al  DOM  
    capturo.innerHTML = generosSeries    

    })
    //favoritos
    //crear array que vamos a ir completando con datos
    let favoritosSeries = []

    //recupero el storage
    let recuperoStorage = localStorage.getItem('favoritosSeries') //vamos a buscar el array para preguntar si hay algo adentro, me devuelve los datos o null

    if (recuperoStorage != null ) { //distinto de null significa que hay datos
        //1ro tenemos que  transformarlo de cadena de texto y despues lo guardamos en favoritos
        favoritosSeries = JSON.parse (recuperoStorage);
     }
    

     //Capturar el elemento. Click en el link
     let favSeries = document.querySelector ('.favSeries');
     

     //fijarme que id este en el array - controlar antes de entregar me salia error
     if (favoritosSeries.includes(id)) {
         favSeries.innerText = "Quitar de favoritos";
        }
     //detectamos el evento
     favSeries.addEventListener ('click', function (evento) {
         evento.preventDefault (); //cancelamos para que no me recarge la pagina, que no funcione como link

        //preguntar si un id esta en favoritos/array
         if (favoritosSeries.includes(id)) {
             //id en el array
             let indice = favoritosSeries.indexOf(id);

             //borrar de favoritos a partir del indice un elemento
             favoritosSeries.splice(indice, 1);
             favSeries.innerText = "Agregar a favoritos"
         }
         //en caso de que de falso el if osea que el dato no este en el array
         else { //guardamos y agregar un dato al array
             favoritosSeries.push (id); //el id es lo que me permite traer un dato en particular, es para poder ver lo que guarde, todos los datos, no solo el id 
             favSeries.innerText = "Quitar de favoritos";
         }

         //guardar el array en el storage
         let favsToStringSerie = JSON.stringify(favoritosSeries); //transformamos el array en una cadena de texto
         localStorage.setItem('favoritosSeries', favsToStringSerie); //lo guardamos en el storage

         console.log(localStorage);
})