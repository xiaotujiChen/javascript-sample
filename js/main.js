/* 
 * CS 1300 HW6
 * Xiyu Chen
 * realize the image switch and append the current date to a footer
 */


// load gloable variable and date_month_year() function
window.onload = function() {
    index = 1;
    alert(index);
    pix = ["jogging.jpg", "swim.jpg", "yoga.jpg", "climbing.jpg"];
    length = pix.length;
    main_image = document.getElementById('main_image');
    date_month_year();
};

// when click on the Next image button, move to next image
function next_image() {
    "use strict";
    //not the last image
    if (index < length) {
        // alert(main_image);
        main_image.src = 'images/' + pix[index];
        index += 1;
    } else { // the last image
        index = 0;
        main_image.src = 'images/' + pix[index];
        index += 1;
    }

}

// when click on the Previous image button, move to previous image
function previous_image() { 
    "use strict";
     // the first image
    if (index == 1) {
        index = length;
        main_image.src = 'images/' + pix[index - 1];
    } else { // not the first image
        index -= 1;
        main_image.src = 'images/' + pix[index - 1];
    }
}

// get the current date and append to footer
function date_month_year() {
    "use strict";
    //define variables
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        curr_date = new Date(),
        curr_week = week[curr_date.getDay()],
        curr_month = month[curr_date.getMonth()],
        curr_year = curr_date.getFullYear(),
        today = curr_date.getDate(),
        new_span = document.createElement('span'),
        new_text = document.createTextNode(today + ' ' + curr_month + ' ' + curr_year),
        position = document.getElementsByTagName('footer')[0];
    //append date to footer
    new_span.appendChild(new_text);
    position.appendChild(new_span);
}




