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
  let result = new Array()
  result = movies.sort((a,b) => {
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
  let result = movies;
  let duracioHores = new Number;
  let duracioMinuts = new Number;
  let durada = new Number;

  for (i=0; i<movies.length; i++) {
  if (movies[i].duration.length == 8 ) {
    duracioHores = parseInt(movies[i].duration.substr(0,1));
    duracioMinuts = parseInt(movies[i].duration.substr(3,2));
    durada = duracioHores*60 + duracioMinuts;
    result[i].duration = durada;
  }
  if (movies[i].duration.length == 7) {
    duracioHores = parseInt(movies[i].duration.substr(0,1));
    duracioMinuts = parseInt(movies[i].duration.substr(3,1));
    durada = duracioHores*60 + duracioMinuts;
    result[i].duration = durada;
  }
  if (movies[i].duration.length == 5) {
    duracioMinuts = parseInt(movies[i].duration.substr(0,2));
    durada = duracioHores*60 + duracioMinuts;
    result[i].duration = durada;
  }
  if (movies[i].duration.length == 2) {
    duracioHores = parseInt(movies[i].duration.substr(0,1));
    durada = duracioHores*60;
    result[i].duration = durada;
  }
}
  return result;
  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let yearMovies = movies.filter(movie => movie.year == year);
  let yearMoviesOrdenats =  yearMovies.sort((a,b) => {
    return b.year - a.year;
  });
  let result = new Array
  result = result.push(yearMoviesOrdenats[0]);
  console.log("EXERCICE 4 ->", result);
  return result;
  
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
