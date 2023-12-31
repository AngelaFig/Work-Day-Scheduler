// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
 
$(document).ready(function(){

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').click(function(event){
    console.log(this);
    event.preventDefault;

    var hour = $(this).parent().find(".hour").text().trim();
    var event = $(this).siblings(".description").val();
    localStorage.setItem(hour,event);

  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time
  // .attr('#id').split("hour")[1];

  function timeTracker(){
  var currentTime = dayjs().format("H");
  console.log(currentTime)

  $('.time-block').each(function(){
    var timeSlot = parseInt($(this).attr('id').split("-")[1]);
    console.log(timeSlot)

    if (timeSlot < currentTime){
      $(this).removeClass("future present").addClass("past");
    }
    if(timeSlot == currentTime){
      $(this).removeClass("past future").addClass("present");
    }
    if(timeSlot > currentTime){
      $(this).removeClass("past present").addClass("future");
    }
  })
}
timeTracker()

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
// maybe use ('#sjhsb").append("<p>string </p>")
// if want before contrainer use .before instead OR .after 

  var userEvent = localStorage.getItem("event");

  $('#hour-9 .description').val(localStorage.getItem('9AM'));
  $('#hour-10 .description').val(localStorage.getItem('10AM'));
  $('#hour-11 .description').val(localStorage.getItem('11AM'));
  $('#hour-12 .description').val(localStorage.getItem('12pm'));
  $('#hour-13 .description').val(localStorage.getItem('1pm'));
  $('#hour-14 .description').val(localStorage.getItem('2pm'));
  $('#hour-15 .description').val(localStorage.getItem('3pm'));
  $('#hour-16 .description').val(localStorage.getItem('4pm'));
  $('#hour-17 .description').val(localStorage.getItem('5pm'));
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM D, YYYY'));
  
});

});
