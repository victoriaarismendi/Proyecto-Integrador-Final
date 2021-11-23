let qs= location.search; //obtengo la qs de la url
let queryStringObj= new URLSearchParams(qs); //transformo lq query string en un objeto literal
let resultado = queryStringObj.get('resultado'); //obtengo el dato id del objeto literal

let mensajeBusqueda = document.querySelector('.leyendaResultados');
mensajeBusqueda.innerText = `Resultados para "${resultado}"`

let url = `https://api.themoviedb.org/3/search/movie?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US&query=${resultado}`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       console.log(data);

       let info = data.results;
       let resultadosMovies = '';
       let resultados = document.querySelector('.elementosEncontrados')
        
       if (resultadosMovies.length == 0){
           let sinResultados = decument.querySelector('.sinResultados')
           sinResultados.innerText = `No se encontraron resultados de búsqueda para '${resultado}'`
           
       } else {
           for (let i=0; i<5; i++){
               resultadosMovies += `<article>
                                    <img src="https://image.tmdb.org/t/p/original/${info[i].poster_path}.jpg">
                                    <h2>${info[i].title}</h2>
                                    </article>`           
                                }
                                
            resultados.innerHTML = resultadosMovies;
       }
    

    })
    .catch(function(error){
        console.log('El error fue:' + error);
    })