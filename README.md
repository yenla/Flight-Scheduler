# Flight-Scheduler

HW - Flight-Scheduler using firebase


Live Link 

https://yenla.github.io/Flight-Scheduler/


Summary

• This homework assignment we learn to use firebase to store data, one of the requirement is to store the user input into our database. I create a flight scheduler where user can input their flight name, destination and time of arrival as well as minutes left. 

Code Explaination

I configure the api to store the user input inside my fire database and connect my javascript to my firebase database.

For example:

		var config = {
		apiKey: "AIzaSyAhbS7QrIQxZeGtLFmUXos-_2JacFjoUls",
		authDomain: "flight-scheduler-3817d.firebaseapp.com",
		databaseURL: "https://flight-scheduler-3817d.firebaseio.com",
		storageBucket: "flight-scheduler-3817d.appspot.com",
		messagingSenderId: "519148052166"

		};
		
		firebase.initializeApp(config);

		var database = firebase.database();

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

