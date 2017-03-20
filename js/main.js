$(function() {
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
});
