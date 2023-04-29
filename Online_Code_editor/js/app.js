$('.main__textarea').height($(window).height() - $('.header').height());

$('#main-output').width(($(window).width() / 2) - 10);

$('.header__group-buttons').click(function () {

    $(this).toggleClass('header__group-buttons--active');

    var panels = $(this).attr('id');

    $('#main-' + panels).toggle();
});

$('.header__group-buttons--play').toggleClass('.header__group-buttons--play-active')


function updateOutput() {
    $('.main__iframe').contents().find("html").html('<html><head><style type="text/css">' + $('#main-css').val() + '</style></head><body>' +
        $('#main-html').val() + '</body></html>');

}


$(document).ready(function () {
    updateOutput();
})


$('.main__textarea').on('change keyup paste', function () {
    updateOutput();

});

document.getElementById('runjs').addEventListener('click', function () {

    document.getElementById('main-output').contentWindow.eval($('#main-js').val());

})
