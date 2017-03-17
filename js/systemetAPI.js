var $systemet_container = $('body');

$.ajax({
    // url: 'https://karlroos-systemet.p.mashape.com/product?limit=100&order=ASC&order_by=name&start_date_from=2014-03-31&start_date_to=2014-05-01&tag=6%2C20', // The URL to the API. You can get this in the API page of the API you intend to consume
    url: 'https://karlroos-systemet.p.mashape.com/product?limit=100&order=ASC&order_by=name&tag=6%2C20&start_date_from=2016-01-01', // The URL to the API. You can get this in the API page of the API you intend to consume

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
    }
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
    var alc = (rnd_drink.alcohol*100).toFixed(2);

    $systemet_container.prepend(
        "RND_index: "+rnd_index+"<br>"+
        "Name: "+(rnd_drink.name).trim()+" "+(rnd_drink.name_2).trim()+"<br>"+
        "Type: "+tag+"<br>"+
        "Price: "+rnd_drink.price+ " SEK"+"<br>"+
        "Alcohol: "+alc+ " %"+"<br>"+
        "<a class='btn btn-primary' target='_blank' href='https://www.systembolaget.se/sok-dryck/?searchquery="+
        rnd_drink.product_number+"&fullassortment=1'>"+
        "Sök efter denna dryck på systembolaget.se"+
        "</a>"
    );
}
