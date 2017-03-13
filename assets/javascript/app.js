// Initialize Firebase
var config = {
apiKey: "AIzaSyAhbS7QrIQxZeGtLFmUXos-_2JacFjoUls",
authDomain: "flight-scheduler-3817d.firebaseapp.com",
databaseURL: "https://flight-scheduler-3817d.firebaseio.com",
storageBucket: "flight-scheduler-3817d.appspot.com",
messagingSenderId: "519148052166"
};
firebase.initializeApp(config);

var database = firebase.database();

var flight = "";
var destination = "";
var firstFlight
var frequency = "";
// var arrival = "";
// var away = "";

$("#submit").on("click", function() {

	flight = $("#flight-name").val().trim();
	destination = $("#destination").val().trim();
	firstFlight = $("#first-flight").val().trim();
	frequency = $("#frequency").val().trim();

	database.ref().set({
		flight: flight,
		destination: destination,
		firstFlight: firstFlight,
		frequency: frequency
	});
});