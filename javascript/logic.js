$(document).ready(function(){

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYFcCCMJ_9mOVlWypP7nR2Z7vIVthi_7I",
    authDomain: "my-project-3e728.firebaseapp.com",
    databaseURL: "https://my-project-3e728.firebaseio.com",
    projectId: "my-project-3e728",
    storageBucket: "my-project-3e728.appspot.com",
    messagingSenderId: "1024852420967",
    appId: "1:1024852420967:web:e9ff5c39edb6eb867427c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $('.submit').on('click', function(event) {

    var nameInput = $('#name').val().trim();
    var numberInput = $('#number').val().trim();
    var destinationInput = $('#destination').val().trim();
    var timeInput = $('#time').val().trim();
    var frequencyInput = $('#frequency').val().trim();

    if (nameInput != '' && numberInput != '' && destinationInput != '' && timeInput.length === 4 && frequencyInput != '') {
        database.ref().push({
            name: nameInput,
            number: numberInput,
            destination: destinationInput,
            time: timeInput,
            frequency: frequencyInput
        })
    } else {
        alert('Please enter train info');
        $('input').val('');
        return false;
    }
    console.log(database);

    $('input').val('');
  });

  database.ref().on('child_added', function (childSnapshot) {
      
    var name = childSnapshot.val().name;
    var number = childSnapshot.val().number;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;

    console.log(name, number, destination, time, frequency);


  })



})