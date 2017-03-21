$(function() {



    $('#page1').on('click', function(event) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        // $('#start-box').fadeOut(200);
        $('#drink-box').fadeOut(200);
        $('#food-box').fadeOut(200);
        $('#movie-box').fadeOut(200);
        $('#summary-box').fadeOut(200);
        window.setTimeout(function() {
            $('#page1').addClass('active-page');
            $('#start-box').fadeIn(200,function() {
            });
        }, 250);
    });

    $('#page2').on('click', function(event) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        $('#start-box').fadeOut(200);
        // $('#drink-box').fadeOut(200);
        $('#food-box').fadeOut(200);
        $('#movie-box').fadeOut(200);
        $('#summary-box').fadeOut(200);
        window.setTimeout(function() {
            $('#page2').addClass('active-page');
            $('#drink-box').fadeIn(200,function() {
            });
        }, 250);
    });

    $('#page3').on('click', function(event) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        $('#start-box').fadeOut(200);
        $('#drink-box').fadeOut(200);
        // $('#food-box').fadeOut(200);
        $('#movie-box').fadeOut(200);
        $('#summary-box').fadeOut(200);
        window.setTimeout(function() {
            $('#page3').addClass('active-page');
            $('#food-box').fadeIn(200,function() {
            });
        }, 250);
    });


    $('#page4').on('click', function(event) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        $('#start-box').fadeOut(200);
        $('#drink-box').fadeOut(200);
        $('#food-box').fadeOut(200);
        // $('#movie-box').fadeOut(200);
        $('#summary-box').fadeOut(200);
        window.setTimeout(function() {
            $('#page4').addClass('active-page');
            $('#movie-box').fadeIn(200,function() {
            });
        }, 250);
    });


    $('#page5').on('click', function(event) {
        $('#navigation-icons i').each(function(index, el) {
            $(this).removeClass('active-page');
        });
        $('#start-box').fadeOut(200);
        $('#drink-box').fadeOut(200);
        $('#food-box').fadeOut(200);
        $('#movie-box').fadeOut(200);
        // $('#summary-box').fadeOut(200);
        window.setTimeout(function() {
            $('#page5').addClass('active-page');
            $('#summary-box').fadeIn(200,function() {
            });
        }, 250);
    });






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
    $('#drink-button').on('click', function(event) {
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
    $('#food-button').on('click', function(event) {
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
    $('#movie-button').on('click', function(event) {
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
        event.preventDefault();

        $('#summary-box').hide('slide',{direction:'right'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#start-box').show('slide',{direction:'left'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

});
