// Global Variables

var secs = 60;

//Hide timer and speed info
$('#timer-info').hide();


// Timer Function
    function timer() {

         setInterval(function() {

            // Countdown seconds
            secs--;

            // Display timer on screen
            $('.timer-zone').text("0:"+secs);

            // If the seconds reach zero, check the answer
            if (secs == 0) {

            checkAnswer();
                
            } 
        }, 1000);

    }

    // Start Screen Button
$(".btn-start").click(function(){

	$('#timer-info').show();
	$('#start-button').hide();	
	timer();
});