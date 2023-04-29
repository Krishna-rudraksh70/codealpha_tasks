// Basic Online Code Editor
// Simple Syntax
// **************************************
// Harsimran Singh



// Setting Up Code Panels Height

// deifnes heigth of the editing area 
// "main__textarea" class of the panels HTML CSS JS
// To cover the full viewport it calculated the heigth of window object and subtracts the heigth of navigation bar
$('.main__textarea').height($(window).height() - $('.header').height());

// It calculates the width for outpur by deviding windows oject width / 2 and subtarcts 10px to fit into rest handeled by CSS Grid
$('#main-output').width(($(window).width() / 2) - 10);

//**********************************************************************************

// Setting Up Button Functions on Navbar

// "header__group-buttons" is the class given to all buttons it is accesed by a click
// a class of "--active" has been added which changes the color when clicked
// this checks the current cotext of buttons and add or remove class "active" on the state
// Every panel has an id of HTML CSS JS so we get the current buttons values of check for panel ids and apple thr class so those can 
// be toggled on / off
$('.header__group-buttons').click(function () {
    //checking clicks
    $(this).toggleClass('header__group-buttons--active');
    // toggling class
    var panels = $(this).attr('id');
    // getting panels ID's
    $('#main-' + panels).toggle();
});

//***********************************************************************************

//Updating Run Button State For JS

$('.header__group-buttons--play').toggleClass('.header__group-buttons--play-active')

//***********************************************************************************

// Updating The Content of Output Window

// A function is run everytime a user inputs a code or write
function updateOutput() {
    $('.main__iframe').contents().find("html").html('<html><head><style type="text/css">' + $('#main-css').val() + '</style></head><body>' +
        $('#main-html').val() + '</body></html>');
    // "main__iframe" is the class of output div
    // the contents method gets the content which is find() in html then html() 
    //contents are pushed along with css html values using val()
}

//***********************************************************************************

// Updating Output whenever browser refreshes

$(document).ready(function () {
    updateOutput();
})

//***********************************************************************************

// Updating output on three condiitons

// On change of content
// On Paste of content
// On Keyup of keyboard
$('.main__textarea').on('change keyup paste', function () {
    updateOutput();
    // It calls updateOutput Function
});

//***********************************************************************************

// JavaScript Execution Function

// Javascript is ran once the code is written using the run button
document.getElementById('runjs').addEventListener('click', function () {
    // When a click is registered
    document.getElementById('main-output').contentWindow.eval($('#main-js').val());
    // Evalutes the values of JS windows and push it to ouput
})

//***********************************************************************************
// Harsimran Singh 2019
