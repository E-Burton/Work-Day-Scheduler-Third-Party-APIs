// VARIABLE DECLARTIONS
var currentDayEl = $("#currentDay");

// Display current date (day of week, month, day of month)
currentDayEl.text(moment().format('dddd, MMMM Do'));

// On click of save button 
$(".saveBtn").on("click", function() {
    // Create var eventTime with value equal to 'id' attribute of parent element
    var eventTime = $(this).parent().attr("id");
    //  Create var eventDescription with value equal to sibling element value with class description
    var eventDecription = $(this).siblings(".description").val();
    // Set/save eventTime and eventDescription in local storage
    localStorage.setItem(eventTime, eventDecription);
})

// Get items from local storage for each time-block to display in description element
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Compare current time (hour) to time-block hour and appy 
function timeComparison () {
    // Create var currentTime with value of hour for current time
    var currentTime = moment().hours();
    
    // For each element with class of 'time-block' create var calendarTime with value equal to parsed integer with element attribute of 'id'
    $(".time-block").each(function () {
        var calendarTime = parseInt($(this).attr("id").split("-")[1]);
        // Compare current time to calendarTime and apply class of past, present, or future
        if (calendarTime < currentTime) {
            $(this).addClass("past");
        } else if (calendarTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

// Call timeComparison function
timeComparison();
