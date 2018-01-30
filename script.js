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

// var neighborhood = [];

console.log("testing page");

$("submit-button").on("click", function(event) {
  console.log("button clicked");
  event.preventDefault();

  var inputResults = $("#input-neighborhood").val();
  console.log(inputResults);

    var queryURL =
    "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/"+ state + "/" + city +".json";
  // "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/NC/raleigh.json"
console.log(queryURL);

  $.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);

    $("#testing").append(response);

  });
})





  // $.ajax({
  // url : queryURL,
  // dataType : "jsonp",
  // success : function(parsed_json) {
  // var location = parsed_json['location']['city'];
  // var temp_f = parsed_json['current_observation']['temp_f'];
  // alert("Current temperature in " + location + " is: " + temp_f);
