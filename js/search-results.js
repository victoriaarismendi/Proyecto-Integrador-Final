let url = `https://api.themoviedb.org/3/search/movie?api_key=9356bdf8fcc476bc9886493a22d862eb&language=en-US&page=1&include_adult=false`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       console.log(data);

        

    })
    .catch(function(error){
        console.log('El error fue:' + error);
    })