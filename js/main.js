$(function() {

    // START -> DRINK
    $('#start_button').on('click', function(event) {
        event.preventDefault();

        $('#start-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#drink-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // DRINK -> FOOD
    $('#drink-button').on('click', function(event) {
        event.preventDefault();

        $('#drink-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#food-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // FOOD -> MOVIE
    $('#food-button').on('click', function(event) {
        event.preventDefault();

        $('#food-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#movie-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

    // MOVIE -> SUMMARY
    $('#movie-button').on('click', function(event) {
        event.preventDefault();

        $('#movie-box').hide('slide',{direction:'left'},200);
        $('html, body').css('overflowX', 'hidden');
        window.setTimeout(function() {
            $('#summary-box').show('slide',{direction:'right'},200,function() {
                $('html, body').css('overflowX', 'auto');
            });
        }, 250);
    });

});
