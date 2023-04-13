// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplay = document.querySelector("#currentDay")
var timeBlock = document.querySelector('.time-block')
var saveBtn = document.querySelectorAll('.saveBtn');
var inputTextArea = document.querySelector('.description')
var hour12 = document.querySelector('#hour-12')
var allButtons = document.querySelectorAll('p')




$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?


    Array.from(saveBtn).forEach(function (saveBtn) {
        saveBtn.addEventListener('click', saveContent);
    });

    inputTextArea.textContent = localStorage.getItem('content');


    function saveContent() {


        localStorage.setItem('content', inputTextArea.value);

        console.log(localStorage)


    }


    

   


    // $(document).ready(function(){
    //     $(".saveBtn").click(function(){
    //         var elmId = $("#hour-12").attr("id");
    //         alert(elmId);
    //     });
    // });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    function timeState() {
        var compareArray = {
            actualTime: "12",
            comparedTime: hourly,
        }



        if (compareArray.actualTime == compareArray.comparedTime) {

            console.log("true")

        } else {

            console.log("false")

        }


    }

    timeState()



    // function timeState(event) {

    //     if (timeBlock = (dayjs().isBefore(dayjs('2024-01-01')) )) {

    //         timeBlock.classList.add("past")

    //    } else { timeBlock = currentTime 
    //             console.log(event)

    //    }
    // }




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


});


var hourly = dayjs();
$('#3a').text(hourly.hour())



