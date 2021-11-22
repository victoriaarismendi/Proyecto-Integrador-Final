let qs = location.search; //obtener la query desde la url
console.log(qs);
let qsto = new URLSearchParams (qs); //transformar la qs en objeto literal
let id = qsto.get ('tv_id');

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`


fetch (url)
    .then (function (response) {
        return response.json ();
    })
    .then (function (data) {

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


        let generos= ""
        let info = data //me falta ver que info necesito
        let capturo= document.querySelector (".generos")
        for (let i=0; i<info.genres.length; i++) {
                                
            console.log(info.genres[i].name);
            generos +=
            `<a href="./detail-genres.html?id=${info.genres[i].id}">${info.genres[i].name}</a>`
        }
    //reenviar los datos actualizados al  DOM  
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

    