// DATE CREATION
let today = new Date (); // set a variable declaring the existence of a date
// declare variables for a year, month, and day
document.getElementById('date').innerHTML = today;// put the date into the calendar

//HOUR TEXT BOX CREATION
let $textbox = $('.textbox') // create a jquery variable that accounts for the class of all the hour textboxes
$textbox.value = 
// set a value input for this variable, make sure it allows for user input 
// 

//HOUR SAVE FEATURE 
$saveBtn = $('.savebtn'); // first, declare a variable that calls all the buttons under the save-btn class
 // next, create an on click function 
$saveBtn.on('click', function() { 
    
});

// you will need localstorage to save these features