let qs = location.search;
let qsto = new URLSearchParams (qs);
let id = qsto.get ('id');


//genero series
let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=<<api_key>>&language=en-US`
fetch (url)
    .then (function (response) {
        return response.json ()
        
    })
    .then (function (data) {
        console.log(data);
        
    })
    .catch (function (error) {
        console.log(error);
    })


//genero peliculas
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US`
fetch (url)
    .then (function (response) {
        return response.json ()
        
    })
    .then (function (data) {
        console.log(data);
        
    })
    .catch (function (error) {
        console.log(error);
    })