var $drink_container = $('#drink-container');
$drink_container.hide();

$('#randomDrink').on('click', function() {

    $drink_container.hide();
    $('#drink-ajax-loader').show();

    // Default tags 6 = beer, 20 = wine
    var tag = "6%2C20";
    if ($("#drink-type-select").val() !== "") {
        tag = $("#drink-type-select").val();
    }

    $.ajax({
        // url: 'https://karlroos-systemet.p.mashape.com/product?limit=100&order=ASC&order_by=name&start_date_from=2014-03-31&start_date_to=2014-05-01&tag=6%2C20', // The URL to the API. You can get this in the API page of the API you intend to consume
        url: 'https://karlroos-systemet.p.mashape.com/product?limit=200&order=ASC&order_by=name&alcohol_to=0.25&price_to=500&tag='+tag+'&start_date_from=2016-01-01', // The URL to the API. You can get this in the API page of the API you intend to consume

        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            console.log(data);
            DisplayProducts(data);
        },
        error: function(err) { console.log(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "4QPq3geqCFmshvfP64gCakrWA5Pvp1MX6jJjsn5zTy9sWnG8Xz"); // Enter here your Mashape key
        },
        complete: function(){
            $('#drink-ajax-loader').hide();
        }
    });

});



function DisplayProducts(data) {
    var rnd_index = Math.floor(Math.random() * data.length);
    var rnd_drink = data[rnd_index];

    var tag = "";
    for (var i = 0; i < rnd_drink.tags.length; i++) {
        if (i === 0) {
            tag = rnd_drink.tags[i].name;
        }
        else {
            tag = tag + ", " + rnd_drink.tags[i].name;
        }
    }
    var alc = (rnd_drink.alcohol*100).toFixed(1);

    $('.drink-icon-container > i').removeClass();
    if (tag.indexOf("beer") !== -1) {
        $('.drink-icon-container > i').addClass('icon ion-beer');
    }
    else {
        $('.drink-icon-container > i').addClass('icon ion-wineglass');
    }

    $('.drink-name').html((rnd_drink.name).trim()+" "+(rnd_drink.name_2).trim());

    $('.drink-type').html(tag);

    $('.drink-price').html(rnd_drink.price+" SEK");

    $('.drink-alcohol').html(alc+ " %");

    $('a.drink-search-btn').attr("href", "https://www.systembolaget.se/sok-dryck/?searchquery="+rnd_drink.product_number+"&fullassortment=1");

    $drink_container.show();

    document.body.scrollTop = document.body.scrollHeight;


}
