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
	var speed = 6.5;
	$('.speed-zone').text(speed);

	// Define the Seconds for this Step
	var secs = 61;
	
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
		var speed = 9;
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
	var secs = 121;
	
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
		var speed = 12;
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

	// Define the Seconds for this Step
	var secs = 91;
	
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
		var speed = 6.5;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer103();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer103() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step4();
   	} 		

}, 1000);
  
}


//////////////////   STEP 4  ///////////////////////

function step4() {

	// Define the Seconds for this Step
	var secs = 61;
	
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
		var speed = 16;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer104();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer104() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step5();
   	} 		

}, 1000);
  
}

//////////////////   STEP 5  ///////////////////////

function step5() {

	// Define the Seconds for this Step
	var secs = 61;
	
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
		var speed = 6.5;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer105();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer105() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step6();
   	} 		

}, 1000);
  
}

//////////////////   STEP 6  ///////////////////////

function step6() {

	// Define the Seconds for this Step
	var secs = 91;
	
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
		var speed = 16;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer106();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer106() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step7();
   	} 		

}, 1000);
  
}

//////////////////   STEP 7  ///////////////////////

function step7() {

	// Define the Seconds for this Step
	var secs = 61;
	
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
		var speed = 9;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer107();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer107() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step8();
   	} 		

}, 1000);
  
}
//////////////////   STEP 8  ///////////////////////

function step8() {

	// Define the Seconds for this Step
	var secs = 61;
	
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
		var speed = 12;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer108();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer108() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step9();
   	} 		

}, 1000);
  
}

//////////////////   STEP 9  ///////////////////////

function step9() {

	// Define the Seconds for this Step
	var secs = 121;
	
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
		var speed = 6.5;
		$('.speed-zone').text(speed);
		// Start the 10 second timer
		timer108();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer109() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
   	   clearInterval(timeinterval); 
   	   step10();
   	} 		

}, 1000);
  
}
//////////////////   STEP 10  ///////////////////////


//////////////////   STEP 11  ///////////////////////


//////////////////   STEP 12  ///////////////////////


//////////////////   STEP 13  ///////////////////////
