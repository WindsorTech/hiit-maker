//Hide timer and speed info
$('#timer-info').hide();
$('.stopwatch').hide(); 
$('#stop-button').hide();

// Start Program on button clicked
$(".btn-start").click(function(){

  $('#timer-info').show();
  $('.stopwatch').show(); 
  $('#start-button').hide(); 
  $('#stop-button').show(); 
  step1();
  startTimer();

});

// HIIT Exercise Variables
var secs = 0;
var speed = 0;

// Stopwatch Variables
var hours = 0;
var minutes = 0;
var seconds = -1;
var timer;

// Function to Start the Stopwatch
function startTimer() {
  timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes == 60) {
        hours++;
        minutes = 0;
    }
    $(".hours").text(hours < 10 ? "0" + hours : hours);
    $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }

// Function to Stop the Stopwatch
function stopTimer() {
    clearInterval(timer);
}

 // function resetTimer() {
   // hours = 0;
   // minutes = 0;
   // seconds = 0;
   // $(".hours").text("00");
   // $(".minutes").text("00");
   // $(".seconds").text("00");
  // }


//////////////////   STEP 1  ///////////////////////
function step1() {

  // Define Speed for this Step and Print It
  var speed = 4;
  $('.speed-zone').text(speed);

  // Define the Seconds for this Step
  var secs = 181;
  
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
    var speed = 5.6;
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
    var speed = 7.4;
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
    var speed = 4;
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
    var speed = 10;
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
    var speed = 4;
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
    var speed = 10;
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
    var speed = 5.6;
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
    var speed = 7.4;
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
    var speed = 4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer109();
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
function step10() {

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
    var speed = 10;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer110();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer110() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step11();
    }     

}, 1000);
  
}

//////////////////   STEP 11  ///////////////////////
function step11() {

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
    var speed = 5.6;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer111();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer111() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step12();
    }     

}, 1000);
  
}

//////////////////   STEP 12  ///////////////////////

function step12() {

  // Define the Seconds for this Step
  var secs = 106;
  
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
    var speed = 7.4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer112();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer112() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step13();
    }     

}, 1000);
  
}

//////////////////   STEP 13  ///////////////////////

function step13() {

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
    var speed = 4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer113();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer113() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step14();
    }     

}, 1000);
  
}

//////////////////   STEP 14  ///////////////////////

function step14() {

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
    var speed = 10;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer114();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer114() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step15();
    }     

}, 1000);
  
}

//////////////////   STEP 15  ///////////////////////

function step15() {

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
    var speed = 5.6;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer115();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer115() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step16();
    }     

}, 1000);
  
}

//////////////////   STEP 16  ///////////////////////

function step16() {

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
    var speed = 7.4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer116();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer116() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step17();
    }     

}, 1000);
  
}

//////////////////   STEP 17  ///////////////////////

function step17() {

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
    var speed = 5.6;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer117();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer117() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step18();
    }     

}, 1000);
  
}

//////////////////   STEP 18  ///////////////////////

function step18() {

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
    var speed = 4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer118();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer118() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step19();
    }     

}, 1000);
  
}

//////////////////   STEP 19  ///////////////////////

function step19() {

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
    var speed = 10;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer119();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer119() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step20();
    }     

}, 1000);
  
}

//////////////////   STEP 20  ///////////////////////

function step20() {

  // Define the Seconds for this Step
  var secs = 76;
  
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
    var speed = 4;
    $('.speed-zone').text(speed);
    // Start the 10 second timer
    timer120();
     } 
   }, 1000);

}

// Step 2 Timer 10 Seconds Rest
function timer120() {

   // Define the Seconds for this Step
   var secs = 11;

   const timeinterval = setInterval(function() {
   // Countdown seconds
   secs--;
   // Display timer on screen
   $('.timer-zone').text(secs).addClass("red10");  

   if (secs == 0) { 
       clearInterval(timeinterval); 
       step21();
    }     

}, 1000);
  
}

//////////////////   STEP 21  ///////////////////////

function step21() {

  // Define the Seconds for this Step
  var secs = 181;
  
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
        stopTimer();
        // The End Text
    $('#time').hide();  
    $('#speed').hide();
    $('.btn-stop').hide();  
    $('#timer-info').text("YOU ARE DONE!").addClass("done");
     } 
   }, 1000);

}

// Stop Button Functionality
$(".btn-stop").click(function(){

  //Stop Timer
  stopTimer();
  // The End Text
  $('#time').hide();  
  $('#speed').hide(); 
  $('.btn-stop').hide(); 
  $('#timer-info').text("YOU ARE DONE!").addClass("done");

});