var page=1;


let movies = {
  apiKey: 'api_key=772213af10f80b00269efe94f7049bb3',
  
  get_popular: function (page,category) {

    // Make a request for a user with a given ID
axios.get('https://api.themoviedb.org/3/movie/'+category+'?'+
this.apiKey+'&page='+page)
.then(function (response) {
  // handle success
  console.log(response.data.results);
  document.getElementById('popular').innerHTML = response.data.results.map(movie => 
    `
    
  
    <div class="col grow" id="${movie.id}" onclick="myFunction(this.id)" > 
        <div class="animate__animated animate__fadeInUp card bg-darklight h-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" >
          <div class="card-body">
            <div class="row ">
              <div class="col">
                <h5 class="card-title ">${movie.title} </h5>
              </div>
              <div class="col-auto ">
                <i class="fa fa-heart " ></i>
              </div>
            </div>
            <p class="card-text"> </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">${movie.release_date}</small>
          </div>
        </div>
      </div>

  `
  ).join('')
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});


},


get_moive: function (){
}
  }


// click category function 
$('nav > a').click(function (e) {
  e.preventDefault();
  var getItem = $(this).text();
  
  $('nav > a').removeClass(' active');
 $(this).addClass(' active ');
  category=getItem.replace(/\s/g, '');
  movies.get_popular("1",category);
  
});

$(document).ready(function(){
  $("#show").click(function(){
   
    page ++;
    alert(page );
    movies.get_popular(page);
    movies.get_moive();
  })
});
  
function myFunction(id) {
  alert(id );

  axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=772213af10f80b00269efe94f7049bb3&language=en-US')
.then(res => {
  movie=res.data;
  console.log(movie);

  document.getElementById('title').innerHTML = movie.title

      document.getElementById('overview').innerHTML = movie.overview
      document.getElementById('date').innerHTML = movie.release_date
      document.getElementById('vote_average').innerHTML = movie.vote_average
      document.getElementById('popularity').innerHTML = ~~movie.popularity
      document.getElementById('vote_count').innerHTML = movie.vote_count
      document.getElementById("poster").src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path;
      document.getElementById("poster").classList="img-fluid  pt-5 rounded"

      document.getElementById("poster").src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path;

      console.log(movie.genres);
      document.getElementById('genres').innerHTML = movie.genres.map(genres => 
        `
        <li class="nav-item m-2 ">
            <a class="nav-link active text-dark  rounded-pill bg-light" aria-current="page" href="#">${genres.name}</a>
          </li>
       
      
      `
      ).join('')

});

axios.get('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=772213af10f80b00269efe94f7049bb3&language=en-US')
.then(response => {
  movie=response.data.results;
  console.log(response.data.results);
  document.getElementById('similar').innerHTML = response.data.results.map(movie => 
    `
    <a href="#" class=" bg-dark list-group-item list-group-item-action active border-0 grow " id="${movie.id}" onclick="myFunction(this.id)"   >
          <div class="card bg-dark " style="width: 12rem;" >
            <img src="http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              
            </div>
        </div>
      </a>
  
  `
  ).join('')
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
  
}


movies.get_popular(1,"popular");
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


