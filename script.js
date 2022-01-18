$(document).ready(function () {
        $('.side_bar').mouseenter(function (e) { 
            $('.side_bar').removeClass('active');
        });
        $('.side_bar').mouseleave(function (e) { 
            $('.side_bar').toggleClass('active');
        });
        $('#disc').mouseenter(function (e) { 
            $(this).toggleClass('show-more')
        });
        $('#disc').mouseleave(function (e) { 
            $(this).removeClass('show-more')
        });
});