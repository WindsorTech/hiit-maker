// Global Variables
var secs10 = 11;
var secs60 = 5;
var secs120 = 10;
var speed = 0;

//Hide timer and speed info
$('#timer-info').hide();

// Start Program on button clicked
$(".btn-start").click(function(){

	$('#timer-info').show();
	$('#start-button').hide();	
	step1();

});

//============================================================

function step1(){

	// Define Speed for this Step and Print It
	var speed = 8;
	$('.speed-zone').text(speed);
	
	// Set up Timer
	const timeinterval = setInterval(function() {
   	secs60--; // Countdown seconds
   	$('.timer-zone').text(secs60); // Display timer on screen
   	
   	if (secs60 == 0) { // When time finishes
   		//Stop Timer
       	clearInterval(timeinterval); 
        // Define Speed for the next Step and Print It
		var speed = 12;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer10();
     } 
   }, 1000);
}

function step2() {

	$('.timer-zone').text("ALRIGHT!");  

}


//=========================================================

// Timer Functions
function timer10() {
   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs10--;
   // Display timer on screen
   $('.timer-zone').text(secs10).addClass("red10");  

   if (secs10 == 0) { 
   	   clearInterval(timeinterval); 
   	   step2();
   	} 		

}, 1000);
  
}

function timer60() {
   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs60--;
   // Display timer on screen
   $('.timer-zone').text(secs60);  }, 1000);
}

function timer120() {
   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs120--;
   // Display timer on screen
   $('.timer-zone').text(secs120);  }, 1000);
}