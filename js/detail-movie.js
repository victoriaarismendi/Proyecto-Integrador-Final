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
        let pelicula = data.results;

        //capturamos elementos del DOM
        let title = document.querySelector ('.tituloPrincipal') 
        let image = document.querySelector ('.portadaPelicula');
        let raiting = document.querySelector ('raiting');
        let fecha = document.querySelector ('fecha');
        let sinopsis = document.querySelector ('datosPelicula');
        let duracion = document.querySelector ('duracion');

        /*image.src = ``;
        title.innerText+=
        raiting.innerText +=
        fecha.innerText+=
        sinopsis.innerText+=
        duracion.innerText=+ */


        let generos= ""
        let info = data //me falta ver que info necesito
        let capturo= document.querySelector (".generos")
        for (let i=0; i<info.genres.length; i++) {
            //elementosLista += `<article> 
                                        
              //                  </article>`

            /*console.log(info.genres[i].name);
            generos +=
            `<a href="./detail-genres.html?id=${info.genres[i].id}">${info.genres[i].name}</a>`*/
        }
    capturo.innerHTML += generos    

    })

    //crear array
    let favoritos = []

    let recuperoStorage = localStorage.getItem('series')

    if (recuperoStorage != null || favoritos.length == 0) {
        favoritos = JSON.parse (recuperoStorage);
     }

     //Capturar el elemento. Click en el link
     let fav = document.querySelector ('#button');
     fav.innerText = "Agregar a favoritos"

     //fijarme que id este en el array - controlar antes de entregar me salia error
     /*if (favoritos.includes(id)) {
         fav.innerText = "Quitar de favoritos"
     }*/

     fav.addEventListener ('click', function (evento) {
         evento.preventDefault ();

         if (favoritos.includes(id)) {
             //id en el array
             let indice = favoritos.indexOf(id);

             //borrar de favoritos
             favoritos.splice(indice, 1);
             fav.innerText = "Agregar a favoritos"
         }
         else { //guardamos y agregar un dato al array
             favoritos.push (id);
             fav.innerText = "Quitar de favoritos";
         }

         //guardar el array en el storage
         let favsToString = JSON.stringify(favoritos);
         localStorage.setItem("series", favsToString);

         console.log(localStorage);
     })

    
