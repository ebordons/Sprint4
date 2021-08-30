// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result =  movies.filter(movie => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let directorMovies = movies.filter(movie => movie.director == director);
  let totalPuntuacio = directorMovies.reduce ((puntAnterior, puntActual) => {
    return puntAnterior.score + puntActual.score
  });
  let result = totalPuntuacio/directorMovies.length;
  console.log("EXERCICE 3 ->", result);
  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titols =  movies.map(movie => movie.title);
  let titolsOrdenats =  titols.sort();
  let result = titolsOrdenats.slice (0,18);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = movies.sort((a,b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0
  });
  
  console.log ("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let genreMovies = movies.filter(movie => movie.genre == genre);
  let totalPuntuacio = genreMovies.reduce ((puntAnterior, puntActual) => {
    return puntAnterior.score + puntActual.score
  });
  let result = totalPuntuacio/genreMovies.length;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let duracioHores = 0
  let duracioMinuts = 0
  let durada = 0
  if (movies.duration.length == 8 ) {
    duracioHores = movies.duration[0];
    duracioMinuts = movies.duration[3] + movies.duration[4];
    durada = duracioHores*60 + duracioMinuts;
    movies.duration = durada;
  }
  if (movies.duration.length == 7) {
    duracioHores = movies.duration[0];
    duracioMinuts = movies.duration[3];
    durada = duracioHores*60 + duracioMinuts;
    movies.duration = durada;
  }
  if (movies.duration.length == 5) {
    duracioMinuts = movies.duration[3] + movies.duration[4];
    durada = duracioHores*60 + duracioMinuts;
    movies.duration = durada;
  }
  return movies;
  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
