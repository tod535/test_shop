$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('.tab-pane').hide();
        $(href).show();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});