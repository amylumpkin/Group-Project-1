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

console.log("testing page");

var city;
var state;

$("#submit-button").on("click", function(event) {
  console.log("button clicked");
  event.preventDefault();

  var inputResults = $("#input-neighborhood").val();
  console.log(inputResults);

  var address = inputResults.split(",");
  state = address[1];
  city = address[0];

    var queryURL =
    "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/"+ state + "/" + city +".json";
  // "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/NC/raleigh.json"
console.log(queryURL);




  $.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response.current_observation.image)
    console.log(response.current_observation.observation_location.city);

    // window.location = 'second-page.html'
    // var displayData = $('<div>');
    // displayData.html = '<p>' + response.current_observation.observation_location.city + '</p>';
    // $("#city-name-here").append('<p>Hello world!</p>');
    // console.log('hey im still working after window change')
    // searchBar.remove()

    const weatherDiv = $('<div>')
    weatherDiv.html(
      `<div id="weather">
        <h1>Weather</h1>
          <div class="row">
            <div class="col-md-12" style="background-color: gray; padding-bottom: 25px;">
                <p>${response.current_observation.observation_location.city}</p>
            </div>
          </div>
        </div>`
    )

    $('#displayContent').html('')
    $('#displayContent').append(weatherDiv)


  });
})
