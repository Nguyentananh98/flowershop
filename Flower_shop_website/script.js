// display menu in mobile mode
function open_menu() {
    // Click button to open menu 
    var menu = document.getElementById("link_list");
    var hamburger_button = document.getElementById("menu_icon");
    menu.style.width = "10em";
    hamburger_button.style.display = "none";  // hide hamburger button
    menu.style.display = "block"; // display menu list
}

function close_menu() {
    // Click to close menu
    var menu = document.getElementById("link_list");
    var hamburger_button = document.getElementById("menu_icon");
    menu.style.display = "none";  // hide menu list
    hamburger_button.style.display = "block";  // display hamburger button
}


function validateForm() {
    // ensure that the user have entered each part of the form
    let first_name = document.forms["purchase_form"]["first_name"].value;
    let last_name = document.forms["purchase_form"]["last_name"].value;
    let email = document.forms["purchase_form"]["email"].value;
    let street = document.forms["purchase_form"]["street"].value;
    let city = document.forms["purchase_form"]["city"].value;
    let country = document.forms["purchase_form"]["country"].value;
    let zip = document.forms["purchase_form"]["zip"].value;
    let card_name = document.forms["purchase_form"]["card_name"].value;
    let card_number = document.forms["purchase_form"]["card_number"].value;
    let card_expr = document.forms["purchase_form"]["card_expr"].value;
    let cvc = document.forms["purchase_form"]["cvc"].value;
    
    if (first_name == "" || last_name == "" || email == "") {
        alert("Please fill up the identity");
        return False;
    }
    else if (street == "" || city == "" || country == "" || zip == "") {
        alert("Please fill up the billing address");
        return False;
    }

    else if (card_name == "" || card_number == "" || card_expr == "" || cvc == "") {
        alert("Please fill up the card information");
        return False;
    }
}


// Create slide show

current_slide = 1;
showSlide(current_slide);

function plusSlide(n) {
    // plus current display slide with 1
    current_slide += n;
    showSlide(current_slide);
}

function showSlide(n) {
    // show the slide each time click on the arrow
    var i;
    var x = document.getElementsByClassName("mySlide1");
    if (n > x.length) {
        current_slide = 1;
    };
    if (n < 1) {
        current_slide = x.length;
    };

    for (i=0; i < x.length; i++) {
        x[i].style.display = "none";
    }; 
    x[current_slide - 1].style.display = "flex";
}



