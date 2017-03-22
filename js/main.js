$(function() {

    function hideMenu(type, time) {
        if ($(window).width() <= 768) {
            $('#menu-icon, #menu-icon > i').css('border-radius', '8px');
            if (type === "slideUp") {
                $('#navigation-icons').slideUp(time);
            }
            else if (type === "none"){
                $('#navigation-icons').hide(time);
            }
        }
    }

    function showMenu() {

    }

    // Hide menu on load of page on mobile/tablet
    if ($(window).width() <= 768) {
        hideMenu("none",0);
    }

    // Hide menu on resize of page to width of mobile/tablet
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('#navigation-icons').show();
        }
        else {
            hideMenu("none", 0);
        }
    });

    $('#menu-icon').on('click', function(event) {
        $('#menu-icon, #menu-icon > i').css('border-radius', '8px 8px 0 0');
        $('#navigation-icons').slideToggle(250, function() {
            if ($('#navigation-icons').is(':visible'))
            {
                $('#menu-icon, #menu-icon > i').css('border-radius', '8px 8px 0 0');
            } else {
                $('#menu-icon, #menu-icon > i').css('border-radius', '8px');
            }
        });

    });


    function setActiveLink(id) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        $('#'+id).addClass('active-page');
    }

    function hidePages(exceptId) {
        var pages = ["start-box", "drink-box", "food-box", "movie-box", "summary-box"];

        // Hitta och ta bort den sida som inte ska gömmas från listan
        var index = $.inArray(exceptId, pages);
        if (index >= 0) {
            pages.splice(index, 1);
        }

        for (var i = 0; i < pages.length; i++) {
            $('#'+pages[i]).fadeOut(200);
        }
    }

    function showPage(pageId, linkId) {
        hidePages(pageId);
        hideMenu('slideUp', 200);
        window.setTimeout(function() {
            setActiveLink(linkId);
            $('#'+pageId).fadeIn(200,function() {
            });
        }, 250);
    }

    $('#page1').on('click', function(event) {
        showPage("start-box", "page1");
    });

    $('#page2').on('click', function(event) {
        showPage("drink-box", "page2");
    });

    $('#page3').on('click', function(event) {
        showPage("food-box", "page3");
    });

    $('#page4').on('click', function(event) {
        showPage("movie-box", "page4");
    });

    $('#page5').on('click', function(event) {
        showPage("summary-box", "page5");
    });


    // FIRST PAGE IS ALWAYS ACTIVE
    $('#page1').addClass('active-page');

    // --> NEXT -->

    // START -> DRINK
    $('#start_button').on('click', function(event) {
        event.preventDefault();

        $('#page1').removeClass('active-page');

        $('#start-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page2').addClass('active-page');
            $('#drink-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // DRINK -> FOOD
    $('#drink-button, #extra-drink-button').on('click', function(event) {
        event.preventDefault();

        $('#page2').removeClass('active-page');

        $('#drink-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page3').addClass('active-page');
            $('#food-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // FOOD -> MOVIE
    $('#food-button, #extra-food-button').on('click', function(event) {
        event.preventDefault();

        $('#page3').removeClass('active-page');

        $('#food-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page4').addClass('active-page');
            $('#movie-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // MOVIE -> SUMMARY
    $('#movie-button, #extra-movie-button').on('click', function(event) {
        event.preventDefault();

        $('#page4').removeClass('active-page');

        $('#movie-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page5').addClass('active-page');
            $('#summary-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });


    // <-- PREVIOUS <--

    // MOVIE <- SUMMARY
    $('#summary-prev-button').on('click', function(event) {
        event.preventDefault();
        $('#page5').removeClass('active-page');
        $('#summary-box').hide('slide',{direction:'right'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page4').addClass('active-page');
            $('#movie-box').show('slide',{direction:'left'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // FOOD <- MOVIE
    $('#movie-prev-button').on('click', function(event) {
        event.preventDefault();
        $('#page4').removeClass('active-page');
        $('#movie-box').hide('slide',{direction:'right'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page3').addClass('active-page');
            $('#food-box').show('slide',{direction:'left'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // DRINK <- FOOD
    $('#food-prev-button').on('click', function(event) {
        event.preventDefault();
        $('#page3').removeClass('active-page');
        $('#food-box').hide('slide',{direction:'right'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page2').addClass('active-page');
            $('#drink-box').show('slide',{direction:'left'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // START <- DRINK
    $('#drink-prev-button').on('click', function(event) {
        event.preventDefault();
        $('#page2').removeClass('active-page');
        $('#drink-box').hide('slide',{direction:'right'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#page1').addClass('active-page');
            $('#start-box').show('slide',{direction:'left'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });


    // START <- SUMMARY
    $('#restart-button').on('click', function(event) {
        // event.preventDefault();
        // $('#page5').removeClass('active-page');
        // $('#summary-box').hide('slide',{direction:'right'},200);
        // $('html, body').css('overflowX', 'hidden');
        // window.setTimeout(function() {
        //     $('#page1').addClass('active-page');
        //     $('#start-box').show('slide',{direction:'left'},200,function() {
        //         $('html, body').css('overflowX', 'auto');
        //     });
        // }, 250);
        window.location.href = "index.html";
    });

});
