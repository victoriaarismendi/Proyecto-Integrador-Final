let qs = location.search;
let qsto = new URLSearchParams (qs);
let id = qsto.get ('id');

let url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&language=en-US`
fetch (url)
    .then (function (response) {
        return response.json ();
    })
    .then (function (data) {
        console.log(data);

        /*let title = document.querySelector ('.tituloPrincipal') //o el h1
        let image = document.querySelector ('');
        let raiting = document.querySelector ('');
        let fecha = document.querySelector ('');
        let sinopsis = document.querySelector ('');
        let genero = document.querySelector (''); */
        

    })
    .catch (function (error) {
        console.log(error);
    })