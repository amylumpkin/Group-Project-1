// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCNTWUDy8-fpaIJTSKkKRJTfYfa35QSQTE",
//   authDomain: "group-project-one.firebaseapp.com",
//   databaseURL: "https://group-project-one.firebaseio.com",
//   projectId: "group-project-one",
//   storageBucket: "group-project-one.appspot.com",
//   messagingSenderId: "835776036347"
// };
//
// firebase.initializeApp(config);
//
// var dbRef = firebase.database().ref('recentUserPush');
//
// // Capture Button Click for search box
// $("#submit-button").click(function(event) {
//   event.preventDefault();
// var city = ("#input-neighborhood").val().trim();
//   // dbRef.push({
//   //   neighborhood: city
//   //   firebase.database.ServerValue.TIMESTAMP
//   // });
// });

$(document).ready(function() {

$(".row").css("display", "block");
$(".search-results").css("display", "none");

console.log("testing page");

var Lat;
var Long;
var city;
var state;
function yelp(data){};

$("#submit-button").on("click", function(event) {
  console.log("button clicked");
  event.preventDefault();

      $(".row").css("display", "none");       //Amy added
      $(".search-results").css("display", "block");


  var inputResults = $("#input-city").val();
  console.log(inputResults);

  var address = inputResults.split(",");
  state = address[1];
  city = address[0];
    var queryURL =
    "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/"+ state + "/" + city +".json";
  // "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/NC/raleigh.json"
    var queryURLair =
    "http://api.waqi.info/search/?token=68441e6dfd4c245577443bc4809bdc431b170095&keyword="+city+"json";
  //http://api.waqi.info/search/?token="+token()+"&keyword="+keyword  
    var queryURLyelpr
    var queryURLschool = "https://api.schooldigger.com/v1.1/schools?st="+ state +"&city="+ city+ "&perPage=2&sortBy=rank&appID=7c44cfcc&appKey=53c1651cdc939f078f21cf3bdaf98356";
   
console.log(queryURL);
console.log(queryURLair);
console.log(queryURLyelpr);

  $.ajax({
    url:queryURL,
    method: "GET",
    success: yelp,
  }).then(function(response){
    console.log(response);
    console.log(response.current_observation.display_location.latitude); 
    console.log(response.current_observation.display_location.longitude);

    $("#testing").append(response);

    function yelp(){
      Lat = response.current_observation.display_location.latitude;
      Long = response.current_observation.display_location.longitude;
       var queryURLyelpr =
    "https://api.yelp.com/v3/businesses/search?term=resturants&latitude="+Lat+"&longtitude="+Long+"&radius=10000&categories=restaurants&limit=1&sort_by=rating&attributes=hot_and_new"
       //var queryURLyelpb =
    //"https://api.yelp.com/v3/businesses/search?term=bar" 
    console.log(queryURLyelpr);

    $.ajax({
      url: queryURLyelpr,
      dataType: 'json',
        method: "GET",
        headers: 
          "Authorization: Bearer <3ktf2TjAxFaA1sHXT_EfFldOOXWAYBGU0sSV-P0V-YlTHRmuuEQnrqRliSIkbWReD2lpIripEAYuHDsx41l7uvxxJBPmKBXI1Ad_Bhh6C11VZyJQUHM61oYj5GlyWnYx>",
    }).then(function(response){
        var resturant = response; 
        console.log(response);
    });



    };

  });

  $.ajax({
      url:queryURLair,
      method: "GET"
    }).then(function(response){
      console.log(response);
      var air = response;
      console.log(air);
    });

  $.ajax({
    url:queryURLschool,
    method: "Get"
  }).then(function(response){
    console.log(response);
  })

})
})

  

//end document ready function

