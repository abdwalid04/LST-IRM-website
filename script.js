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
(function ($) {
    var allPanels = $('.toc-tab-box .acc-content').hide();
    var alltitle = $('#TNIM-title,#TWM-title,#TI-title,#BDM-title,#CPM-title,#TDM-title,#MIQS-title,#PMM-title,#PFE-title,#APR-title')
    $('#TNIM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#TNIM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#TWM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#TWM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#TI-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#TI-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#BDM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#BDM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#CPM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#CPM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#APR-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#APR-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#TDM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#TDM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#MIQS-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#MIQS-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#PMM-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#PMM-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    $('#PFE-title').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            alltitle.removeClass('open');
            $(this).addClass('open');
            $('#PFE-desc').slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    var insdeDivs = $('.acc-content .quest .answer').hide();
    $('.acc-content .quest .accordionItemHeading h4').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            insdeDivs.slideUp();
            $(this).addClass('open');
            $(this).parent().parent().parent().parent().parent().parent().find('.answer').slideDown();
        } else {
            insdeDivs.slideUp();
            $(this).removeClass('open');
        }
    });
})(jQuery);