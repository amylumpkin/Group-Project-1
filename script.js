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
$(".search-results").css("display", "none");    //Amy added

console.log("testing page");


var city;
var state;

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
console.log(queryURL);
console.log(queryURLair);

console.log(queryURL);


  $.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);

    // console.log(response.current_observation.display_location.latitude); Test to pull latitude out


    $("#testing").append(response);

  });


  $.ajax({
      url:queryURLair,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });

})

  
})





