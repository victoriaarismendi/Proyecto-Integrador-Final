let qs= location.search; //obtengo la qs de la url y los retorna en cadena de texto
let queryStringObj= new URLSearchParams(qs); //transformo lq query string en un objeto literal
let resultado = queryStringObj.get('resultado'); //obtengo el dato id del objeto literal

let mensajeBusqueda = document.querySelector('.leyendaResultados');//capturo el elemento que quiero modificar
mensajeBusqueda.innerText = `Resultados para "${resultado}"`//y lo modifico

let url = `https://api.themoviedb.org/3/discover/movie?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

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
           for (let i=0; i<resultadosMovies.length; i++){
               resultadosMovies += `<article>
                                    <img src="https://image.tmdb.org/t/p/original${info[i].poster_path}">
                                    <h2>${info[i].original_title}</h2>
                                    </article>`           
                                }
                                
            resultados.innerHTML = resultadosMovies;
       }
    

    })
    .catch(function(error){
        console.log('El error fue:' + error);
    })

console.log('validando');

let formulario = document.querySelector('form');
let inputField = document.querySelector('.formBuscadorInput');
let message = document.querySelector('.mensaje');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita el envío del formulario
    console.log('no');

    //chequear que tenga datos
    if (inputField.value == '') { // Preguntamos si el valor del campo está vacio
        message.innerText = "El campo está vacío.";
        message.style.color = "white";
        inputField.style.outline = "2px solid white";
    } else if (inputField.value.length < 3){
        message.innerText = "Debe escribir al menos 3 caracteres.";
    } else {
        this.submit();
    }
})