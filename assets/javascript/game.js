// Global Variables
var secs = 0;
var speed = 0;

//Hide timer and speed info
$('#timer-info').hide();

// Start Program on button clicked
$(".btn-start").click(function(){

	$('#timer-info').show();
	$('#start-button').hide();	
	step1();

});

//////////////////   STEP 1  ///////////////////////
function step1(){

	// Define Speed for this Step and Print It
	var speed = 8;
	$('.speed-zone').text(speed);

	// Define the Seconds for this Step
	var secs = 5;
	
	// Set up Timer 60 seconds
	const timeinterval = setInterval(function() {
   	// Countdown seconds
   	secs--; 
   	//Print seconds on screen
   	$('.timer-zone').text(secs);
   	// When time finishes
   	if (secs == 0) { 
   		//Stop Timer
       	clearInterval(timeinterval); 
        // Define Speed for the next Step and Print It
		var speed = 12;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer101();
     } 
   }, 1000);
}

// Step 1 Timer 10 Seconds Rest
function timer101() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step2();
   	} 		

}, 1000);
  
}


//////////////////   STEP 2  ///////////////////////

function step2() {

	// Define the Seconds for this Step
	var secs = 19;
	
	// Set up Timer 60 seconds
	const timeinterval = setInterval(function() {
   	// Countdown seconds
   	secs--; 
   	//Print seconds on screen
   	$('.timer-zone').text(secs).removeClass("red10");
   	// When time finishes
   	if (secs == 0) { 
   		//Stop Timer
       	clearInterval(timeinterval); 
        // Define Speed for the next Step and Print It
		var speed = 50;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer102();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer102() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step3();
   	} 		

}, 1000);
  
}


//////////////////   STEP 3  ///////////////////////

function step3() {

	

}


//////////////////   STEP 4  ///////////////////////


//////////////////   STEP 5  ///////////////////////


//////////////////   STEP 6  ///////////////////////




