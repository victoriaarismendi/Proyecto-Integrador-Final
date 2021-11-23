let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');


let url = `https://api.themoviedb.org/3/genre/movie/list/${id}?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US`;
 fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.genres);
        let generos = data.genres; //array de datos que vino de la API
        //capturar elementos del DOM
        let genero = document.querySelector('.detailTituloGenero');
        let elementoDeGenero = ''; 
        // buscar los datos y actualizarlos
        for (let i=0; i<generos.length; i++) {
            elementoDeGenero += `<h1>${generos[i]}</h1>`;
        }
        //Enviar datos actualizados al DOM
        genero.innerHTML += elementoDeGenero;
    })
    .catch(function(error){
        console.log(error);
    })


let url2 = `https://api.themoviedb.org/3/movie/${id}?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US`
fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        
    })
    .catch(function(error){
        console.log(error);
    })
