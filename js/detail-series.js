//pasos para la query string - sacar de la url los datos que quiero
let qs = location.search; //obtener la query desde la url
console.log(qs);
let qsto = new URLSearchParams (qs); //transformar la qs en objeto literal
let id = qsto.get ('tv_id'); //obtener el dato del id del objeto literal


//armar un fecth para buscar los datos de la pelicula 
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`  //la parte del id va ir cambiando dependiendo del valor que obtenemos de la query string
fetch (url)
    .then (function (response) {
        return response.json ();
    })
    .then (function (data) {
        //capturar elementos del DOM
        let title = document.querySelector ('.tituloPrincipal')
        let image = document.querySelector ('.portadaSerie');
        let raiting = document.querySelector ('.raiting');
        let fecha = document.querySelector ('.fecha');
        let sinopsis = document.querySelector ('.datosSerie'); 

        //acumular los elementos de lista
        //let elementosLista = ''


        //actualizar los datos del dom - ver si lo pongo dentro del for
        /*image.src = ``;
        title.innerText+=
        raiting.innerText +=
        fecha.innerText+=
        sinopsis.innerText+= */        


       /* let generos= ""
        let info = data //me falta ver que info necesito
        let capturo= document.querySelector (".generos")
        for (let i=0; i<info.genres.length; i++) {
                                
            console.log(info.genres[i].name);
            generos +=
            `<a href="./detail-genres.html?id=${info.genres[i].id}">${info.genres[i].name}</a>`
        } */
    //reenviar los datos actualizados al  DOM  
   // capturo.innerHTML += generos    

    })

    //crear array que vamos a ir completando con datos
    let favoritos = []
    //recupero el storage
    let recuperoStorage = localStorage.getItem('series') //vamos a buscar el array para preguntar si hay algo adentro, me devuelve los datos o null

    if (recuperoStorage != null || favoritos.length == 0) { //distinto de null significa que hay datos
        //1ro tenemos que  transformarlo de cadena de texto y despues lo guardamos en favoritos
        favoritos = JSON.parse (recuperoStorage);
     }

     //Capturar el elemento. Click en el link
     let fav = document.querySelector ('#button'); //button es el id que le di yo en el html a la etiqueta <i>
     //fav.innerText = "Agregar a favoritos"

     //fijarme que id este en el array - controlar antes de entregar me salia error
     if (favoritos.includes(id)) {
         fav.innerText = "Quitar de favoritos"
     }
     //detectamos el evento
     fav.addEventListener ('click', function (evento) {
         evento.preventDefault (); //cancelamos para que no me recarge la pagina, que no funcione como link
        //preguntar si un id esta en favoritos/array
         if (favoritos.includes(id)) {
             //id en el array
             let indice = favoritos.indexOf(id);

             //borrar de favoritos a partir del indice un elemento
             favoritos.splice(indice, 1);
             fav.innerText = "Agregar a favoritos"
         }
         //en caso de que de falso el if osea que el dato no este en el array
         else { //guardamos y agregar un dato al array
             favoritos.push (id); //el id es lo que me permite traer un dato en particular, es para poder ver lo que guarde, todos los datos, no solo el id 
             fav.innerText = "Quitar de favoritos";
         }

         //guardar el array en el storage
         let favsToString = JSON.stringify(favoritos); //transformamos el array en una cadena de texto
         localStorage.setItem("series", favsToString); //lo guardamos en el storage

         console.log(localStorage);
     })

    