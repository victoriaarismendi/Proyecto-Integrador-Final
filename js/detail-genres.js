let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');


let url = `https://api.themoviedb.org/3/genre/movie/list/${id}?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US`;
 fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let generos = data.results; //array de datos que vino de la API
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

        let info = data.results;
        let resultadoGenero = '';
        let resultados = document.querySelector('peliculaGeneroRomance');

        for (let i=0; i<resultadoGenero.length; i++){
            resultadoGenero += `<article class="peliculaGeneroRomance">
                                <div class="contenedorDePortada">
                                    <img src="https://image.tmdb.org/t/p/original${info[i].poster_path}" alt="Foto de la portada de la película Orgullo y prejuicio">
                                </div>
                                <h2>${info[i].original_title}</h2>
                                </article>`
        }

        resultados.innerHTML += elementoDeGenero;
        
    })
    .catch(function(error){
        console.log(error);
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
