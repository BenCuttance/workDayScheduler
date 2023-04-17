//Variables to call upon throughout the code.

var timeDisplay = document.querySelector("#currentDay")
var timeBlock = document.querySelector('.time-block')
var saveBtn = document.querySelectorAll('.saveBtn');
var inputTextArea = document.querySelector('.description')
var hour12 = document.querySelector('#hour-12')
var allButtons = document.querySelectorAll('p')



// Once page loads calls function to let user save any text into the local storage using Jquery and "this"
$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        console.log(time)
        localStorage.setItem(time, value)
    })
})



// calls the currentTime function every 1000 milliseconds (1 second) to update timer in heading.
    setInterval(currentTime, 1000);


// function that calls timer in header.
    function currentTime() {
        $(timeDisplay).text(dayjs().format('dddd, MMMM D, h:mm:ss a'));
    }



//Shows developers the current hour of the day to reference with.
var hourly = dayjs();
$('#3a').text(hourly.hour())


// Function uses Jquery the get the div Id by name, splits the Id name by the "-" and returns the number. Using the returned number it is then compared with the current 
// hour of the day. If Id number is below current hour the .past class is applied and all other classes are removed, changing the background text box to grey. If id === current hour 
// .present is added for a red textbox, else .future is added to display green textbox. 
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
// hourlyUpdate function is called once page loads.
hourlyUpdate()
//hourlyUpdate is called every 15000 miliseconds = 15 seconds.
var interval = setInterval (hourlyUpdate, 15000)

// Allows user to re-load any saved text from the local storage. 
$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))