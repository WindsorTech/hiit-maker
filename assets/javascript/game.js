// Global Variables

var secs10 = 11;
var secs60 = 5;
var secs120 = 10;
var speed = 6;

//Hide timer and speed info
$('#timer-info').hide();


// Timer Functions
    function timer10() {

         const timeinterval = setInterval(function() {

            // Countdown seconds
            secs10--;

            // Display timer on screen
            $('.timer-zone').text(secs10).addClass("red10");

            // If the seconds reach zero, stop timer
            if (secs10 == 0) {

            clearInterval(timeinterval);
              
            }
           
        }, 1000);

    }


    function timer60() {

         const timeinterval = setInterval(function() {

            // Countdown seconds
            secs60--;

            // Display timer on screen
            $('.timer-zone').text(secs60);

            // If the seconds reach zero, stop timer
            if (secs60 == 0) {

            clearInterval(timeinterval);

            timer10();
                
            } 

        }, 1000);

    }


     function timer120() {

         const timeinterval = setInterval(function() {

            // Countdown seconds
            secs120--;

            // Display timer on screen
            $('.timer-zone').text(secs120);

            // If the seconds reach zero, stop timer
            if (secs120 == 0) {

            clearInterval(timeinterval);

            timer10();
                
            } 

        }, 1000);

    }

    // Start Screen Button
$(".btn-start").click(function(){

	$('#timer-info').show();
	$('#start-button').hide();	
	timer60();

});