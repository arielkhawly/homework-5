$(document).ready(function () {
    // DATE CREATION
    let today = new Date(); // set a variable declaring the existence of a date
    document.getElementById('date').innerHTML = today.toDateString();// put the date into the calendar
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

        // 2. Assign the color based on current time (gethour) need 3 conditionals: past, present, future
        let currentHour = today.getHours() // this is in military time 
        let hourData = $(this).data('hour');
        if (currentHour === hourData)
            $(this).children('.user-input').addClass('current-hour');
        else if (currentHour > hourData)
            $(this).children('.user-input').addClass('past-hour');
        else if (currentHour < hourData)
        $(this).children('.user-input').addClass('future-hour');



        // $(this).data('hour'); for retriving html 

        // 3. event listener
        let $saveBtn = $(this).children('.save-btn');
        $saveBtn.on('click', function () {
            let hourlyValue = $(this).children('.user-input').val(); // keep this variable inside, because it will pull the val ON the click
            localStorage.setItem(keyName, JSON.stringify(hourlyValue));// change to 2nd JSON

        });
    })
});
