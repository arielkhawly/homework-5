$(document).ready(function () {
    // date creation
    let today = moment();   // set a variable declaring the existence of a date
    document.getElementById('date').innerHTML = today.format('dddd, MMMM Do');// put the date into the calendar
    // saving user inputs  
    $('.hour').each(function () { // set event listener, 
        // check localstorage for the value for each hour
        let keyName = $(this).children('.hour-name').text();
        console.log(keyName);
        let everyInput = localStorage.getItem(keyName);
        console.log(everyInput)
        // if it has it, load it into the input
        if (everyInput !== null) {
            $('.user-input', this).val(everyInput); //
        }

        // Assign the color based on current time (gethour) need 3 conditionals: past, present, future
        let currentHour = today.hour(); // this is in military time 
        let hourData = $(this).data('hour');
        // create conditions for each
        if (currentHour === hourData)
            $('.user-input', this).addClass('current-hour');
        else if (currentHour > hourData)
            $('.user-input', this).addClass('past-hour');
        else if (currentHour < hourData)
            $('.user-input', this).addClass('future-hour');



        // $(this).data('hour'); for retriving html 

        // event listener to get saved inputs 
        let $saveBtn = $(this).children('.save-btn');
        $saveBtn.on('click', () => { //arrow changes the scope of the this keyword
            let hourlyValue = $('.user-input', this).val(); // keep this variable inside, because it will pull the val ON the click
            localStorage.setItem(keyName,hourlyValue);

        });
    })
});
