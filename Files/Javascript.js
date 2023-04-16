// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplay = document.querySelector("#currentDay")
var timeBlock = document.querySelector('.time-block')
var saveBtn = document.querySelectorAll('.saveBtn');
var inputTextArea = document.querySelector('.description')
var hour12 = document.querySelector('#hour-12')
var allButtons = document.querySelectorAll('p')

$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        console.log(time)
        localStorage.setItem(time, value)
    })
})


// $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?


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

    setInterval(currentTime, 1000);

    function currentTime() {
        $(timeDisplay).text(dayjs().format('dddd, MMMM D, h:mm:ss a'));
    }


// });


var hourly = dayjs();
$('#3a').text(hourly.hour())

function hourlyUpdate() {
    var date = new Date 
    
    var hour = date.getHours()
    
    $('.time-block').each(function() {
        var blockHour = parseInt($(this).attr('id').split('-')[1])
        console.log(blockHour)

        if (blockHour < hour) {
            $(this).addClass('past')
            $(this).removeClass('future')
            $(this).removeClass('present')

            
        } else if (blockHour === hour) { 
            $(this).removeClass('past')
            $(this).removeClass('future')
            $(this).addClass('present')
            
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }

    })

}

hourlyUpdate()

var interval = setInterval (hourlyUpdate, 15000)

$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))