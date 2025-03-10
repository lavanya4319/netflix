let movies = [
   {
      name: "rowdyboys",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rowdy-boys-et00311775-10-01-2022-07-21-07.jpg",
      rating: 9.5

   },
   {
      name: "maharshi",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWCFdT4RxEA4JuA278p7-Ow4kzxsMerEX-g&s",
      rating: 10



   },
   {

      name: "hi nanna",
      poster: "https://www.businessoftollywood.com/wp-content/uploads/2023/12/F8d13qmakAA46Fw-320x400.jpeg",
      rating: 10


   },
   {
      name: "rrr",
      poster: "https://www.telugubulletin.com/wp-content/uploads/2020/03/roudramranamrudhiram.jpg",
      rating: 10




   },
   {
      name: "ega",
      poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201305/eega-poster_660_051613054557.jpg?VersionId=78QUGwcLrJKvw.gFYjRt80poPedR_h3F",
      rating: 10




   },
   {
      name: "fida",
      poster: "https://media.themoviedb.org/t/p/w500/cvpwHdJuUzm544lvleBIAxGdzBB.jpg",
      rating: 10




   }


];



function selmovies() {
   let movieName = document.getElementById('search').value;
   console.log(movieName);
   if (movieName !=="") {
      let result = movies.filter(function (movie) {
         return movie.name.toUpperCase().includes(movieName.toUpperCase());
      })
      // console.log(result.name);
      // console.log(result);

      displayMovies(result);
   }
   
}
function displayMovies(data) {
   let htmlString = ``;
   for (let i = 0; i < data.length; i++) {
      htmlString = htmlString + `
          <div class="movie">
                <div class="overlay">
                 <div class="video">
                      </div>
                  <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>rating : ${data[i].rating}</h2>
                                <p>rami malek.jhon jacobs.emma stone</p>
                  </div>
               </div>
                     <img class="poster" src="${data[i].poster}" alt="poster" >
         </div>
      `

   }

   document.getElementById("movies").innerHTML = htmlString;
}
displayMovies(movies);

