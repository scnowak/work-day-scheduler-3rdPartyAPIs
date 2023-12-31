// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// displaying the time

function displayTime() {

    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

    timeDisplayEl.text(rightNow);
  }

//var todayDate = moment().format('dddd, MMM Do YYYY');
//$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        //var text = $(".saveBtn").siblings(".description").val();
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = dayjs().hour();
        console.log("TIME NOW: ", typeof timeNow)

        // loop over time blocks  //help in tutoring session
        //document.createElement("button") // Vanilla JS
        //$('<button>') // jQuery
        $(".time-block").each(function () {
            //var blockTime = parseInt($(this).attr("id").split("hour")[1]); // returning -17
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            console.log("BLOCK TIME: ", blockTime)
            
            // To check the time and add the classes for background colors: gray-past, red-present, green-future
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

           // var storeKey = $(this).attr("id");
           // $(this).children('.description').val(localStorage.getItem($(this).attr("id")))      // Tutors solution
            
        })
    }

    // Get item from local storage if any for filling out schedule
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeTracker();
})


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code doesn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    displayTime();
    setInterval(displayTime, 1000);

});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

