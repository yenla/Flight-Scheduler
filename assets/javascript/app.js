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

// var flight = "";
// var destination = "";
// var firstFlight
// var frequency = "";
// var arrival = "";
// var away = "";

$("#submit").on("click", function(event) {

	var flight = $("#flight-name").val().trim();
	var destination = $("#destination").val().trim();
	var firstFlight = $("#first-flight").val().trim();
	var frequency = $("#frequency").val().trim();

	database.ref().push({
		flight: flight,
		destination: destination,
		firstFlight: firstFlight,
		frequency: frequency
	});
});

database.ref().on("child_added", function(childSnapshot) {
	
	
	if (childSnapshot.val()){
		frequency = childSnapshot.val().frequency;

		var convertDate = moment(childSnapshot.val().firstFlight, 'hh:mm').subtract(3, 'months');
		var arrival = moment(convertDate).format('HH:mm');
		var currentTime = moment();

		var firstTimeConvert = moment(arrival, 'hh:mm').subtract(3, 'months');
		var differentTime = moment().diff(moment(firstTimeConvert), 'minutes');
		var timeRemain = differentTime % frequency;

		var minsAway = frequency - timeRemain;

		var nextFlight = moment().add(minsAway, 'minutes').format('HH:mm');

		$("#schedule").append("<tr><td>" + childSnapshot.val().flight + "</td><td>" +
			childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + 
			"</td><td>" + arrival + "</td><td>" + minsAway + "</td><td>")
		}
	}, function(errorObject) {
			console.log("Errors handled: " + errorObject.code);
		});
