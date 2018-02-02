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
// Initializes all the variables and logs testing page
console.log("testing page");

var Lat;
var Long;
var city;
var state;
function yelp(data){};



//$(document).ready(function () {
    //$.get('https://cors-anywhere.herokuapp.com/http://jsonip.com', function (res) {
       // (console.log)('IP Address is: ' + res.ip);
    //});
//});

// $(document).ready(function () {
//   $.getJSON("http://smart-ip.net/geoip-json?callback=", function(data) {
//       console.log('My IP Address is: ' + data.host);
//   });
// });




// accepts the user's input and splits the string into useable data for API's State, City

//$("#submit-button").on("click", function(event) {
  //console.log("button clicked");
  //event.preventDefault();



      $(".row").css("display", "none");       //Amy added
      $(".search-results").css("display", "block");



  var inputResults = $("#input-city").val();
  console.log(inputResults);

  var address = inputResults.split(", ");
  state = address[1];
  city = address[0];


  //Below this line are all the Query URL's for the API's we are using.  
    var queryURL =
    "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/"+ state + "/" + city +".json";
  // "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/NC/raleigh.json"
    var queryURLair =
    "http://api.waqi.info/search/?token=68441e6dfd4c245577443bc4809bdc431b170095&keyword="+city+"json";
  //http://api.waqi.info/search/?token="+token()+"&keyword="+keyword  
    var queryURLyelpr
    var queryURLschool = "https://api.schooldigger.com/v1.1/rankings/schools/"+state+"?level=Middle&perPage=2&appID=7c44cfcc&appKey=53c1651cdc939f078f21cf3bdaf98356";
   //https://api.schooldigger.com/v1.1/schools?st="+ state +"&city="+ city+ "&perPage=2&sortBy=rank&appID=&appKey=

//Console Logging all the query urls
console.log(queryURL);
console.log(queryURLair);
console.log(queryURLyelpr);


// This is our first API call for weather underground.  This API is important because it gives both the weather, temp, precipitaion, and the Location in Longitude and Latitude
// I used success on this call to link to the function yelp.  The Yelp API requires longitude and latitude as parameters so the weather API must run first.

  $.ajax({
    url:queryURL,
    method: "GET",
    success: yelp,
  }).then(function(response){
    console.log(response);
    console.log(response.current_observation.display_location.latitude); 
    console.log(response.current_observation.display_location.longitude);

    $("#testing").append(response);

    // Here is function yelp. It logs the latitude and longitude as variables and creates the queryURL's
    function yelp(){
      Lat = response.current_observation.display_location.latitude;
      Long = response.current_observation.display_location.longitude;

      // There will need to be a different queryURL for each different business users wish to see.  queryURLyelpr is for resturants 
       var queryURLyelpr =
    "https://api.yelp.com/v3/businesses/search?term=resturants&latitude="+Lat+"&longtitude="+Long+"&radius=10000&categories=restaurants&limit=1&sort_by=rating&attributes=hot_and_new"
       
      // Commented out this yelp would be for bars
       //var queryURLyelpb =
    //"https://api.yelp.com/v3/businesses/search?term=bar" 
    

    console.log(queryURLyelpr);
    
      // This AJAX call is used to get the data from yelp.  It has to have authorization in the header.  Review the documentation
      // Currently this call does not show up with errors or with data.  Very Confusing.  

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

// This AJAX call is for the Air Quality of the City.  It also has a widget that is not operational in the html

  $.ajax({
      url:queryURLair,
      method: "GET"
    }).then(function(response){
      console.log(response);
      var air = response;
      console.log(air);
    });

//  This AJAX call is for the school data in a city.  How the query URL is set up currently is to return the top two ranked schools in the city.  
//  This AjAX call is currently throwing an error 400

  $.ajax({
    url:queryURLschool,
    method: "Get"
  }).then(function(response){
    console.log(response);
  })

})
})

  

//end document ready function

