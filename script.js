$(document).ready(function () {
    // DATE CREATION
    let today = new Date(); // set a variable declaring the existence of a date
    // declare variables for a year, month, and day
    document.getElementById('date').innerHTML = today;// put the date into the calendar
// SAVING AND COLOR 
    $('.hour').each(function () { // set event listener, 
        // 1. check localstorage for the value for each hour
        let keyName = $(this).children('.hour-btn').text();  
        console.log(keyName);
        let everyInput = JSON.parse(localStorage.getItem(keyName));// put JSON here
        console.log(everyInput)
        // if it has it, load it into the input
        if (everyInput !== null) {
            $(this).children('.user-input').val(everyInput);
        }

        // 2. Assign the color based on current time

        // 3. event listener
        let $saveBtn = $(this).children('.save-btn');
        let hourlyValue = $(this).children('.user-input').val();
        $saveBtn.on('click', function () {
            localStorage.setItem(keyName, JSON.stringify(hourlyValue));// change to 2nd JSON

        });
    })
});
