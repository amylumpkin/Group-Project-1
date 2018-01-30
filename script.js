// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNTWUDy8-fpaIJTSKkKRJTfYfa35QSQTE",
  authDomain: "group-project-one.firebaseapp.com",
  databaseURL: "https://group-project-one.firebaseio.com",
  projectId: "group-project-one",
  storageBucket: "group-project-one.appspot.com",
  messagingSenderId: "835776036347"
};

firebase.initializeApp(config);

var dbRef = firebase.database().ref('recentUserPush');

// Capture Button Click for search box
$("#submit-button").click(function(event) {
  event.preventDefault();

  dbRef.push({
    neighborhood: $("#input-neighborhood").val().trim().
    firebase.database.ServerValue.TIMESTAMP
  });
});

var neighborhood = [];

function displaySearchResults() {

    var queryURL =
    "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/"+ state + "/" + city +".json"
  // "http://api.wunderground.com/api/a4c1cc1f438c8eaf/conditions/q/NC/raleigh.json"
}

  $.ajax({
  url : queryURL,
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
