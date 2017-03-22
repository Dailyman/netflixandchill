$(document).on("ready", function(){
    $("#food-container").hide();

    $("#getRandomFoodBtn").on("click", function(){
        $("#food-container").empty();

        var type = $("#food-type-select").val();
        var pref = $("#preference-type-select").val();

        var fUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=' + type + '%2C' + pref ;

        $.ajax({
            url: fUrl,
            dateType: "JSON",
            headers: {"X-Mashape-Authorization": "p7zkjTyp9Tmsh3Bk8Y7uF3eqJLcrp1O0x3PjsneZMi4XRFspNB"}
        }).done(function(data){
            console.log(data);
            var results = data.recipes[0];

            var title = results.title;
            var image = results.image;
            var sourceUrl = results.sourceUrl;
        //for (var i = 0; i < results.length; i++);
        //    var stuff = results[i].;
            image = '<img src="' + image + '" class="img-thumbnail">';
            title = '<p>Titel: <span class="title">' + "<br>" + title + '</span></p>';
            sourceUrl = '<a class="btn btn-primary btn-lg btn-block" target="_blank" href="' + sourceUrl + '" id="food-search-btn">Gå till recept</a>';

            var addStuff = $('<div class="col-xs-12 col-md-6" centered>' + '<figure>' + image + '</figure>' + title + sourceUrl + '</div>');

            //$("#food-title").html(title);
            //$("#recipe-image").html('<img src="' + image + '" alt=some_text class="img-responsive" id="poster">');
            $("#food-container").append(addStuff);
            //$("#food-container").html("<p>Title: " + title + "</p>");
            //$("a#food-search-btn").attr("href", "sourceUrl");
        });
        $("#food-container").slideDown();
    });
});
