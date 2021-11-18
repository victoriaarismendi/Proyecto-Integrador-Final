let qs = location.search;
let qsto = new URLSearchParams (qs);
let id = qsto.get ('id');

let url = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`

fetch (url)
    .then (function (response) {
        return response.json ();

    })
    .then (function (data) {
        console.log(data);

        let title = document.querySelector ('.tituloPrincipal') //o el h1
        let image = document.querySelector ('');
        let raiting = document.querySelector ('li');
        let fecha = document.querySelector ('li');
        let sinopsis = document.querySelector ('datosPelicula');
        let genero = document.querySelector ('');
    })
    .catch (function (error) {
        console.log(error);
        
    })
