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

const databaseRef = firebase.database().ref('recentUserPush');

// Capture Button Click for search box
$("#submit-button").click(function(event) {
  event.preventDefault();

  databaseRef.push({
    neighborhood: $("#input-neighborhood").val().trim().
    firebase.database.ServerValue.TIMESTAMP
  });
});
