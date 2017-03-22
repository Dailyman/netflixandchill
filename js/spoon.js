$(document).on("ready", function(){

    // HIDE EXTRA NEXT PAGE BTN
    var $extraFoodBtn = $('#food-bottom-btn');
    $extraFoodBtn.hide();


    $(".food-container").hide();
    var $poster = $(".image-box");
    var $food = $(".food-container");

    $("#getRandomFoodBtn").on("click", function(){
        $(".food-container").empty();
        $(".image-box").empty();

        $('#food-ajax-loader').show();
        $poster.hide();
        $food.hide();
        $extraFoodBtn.hide();

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
            var time = results.readyInMinutes;

            $(".image-box").html("<img src="+ image +" alt=some_text class='img-responsive' id='poster'>");

            ftitle = '<p>Title: <span class="ftitle">' + title + '</span></p>';
            time = '<p>Ready in: ' + time + ' minutes</p>';
            sourceUrl = '<a class="btn btn-primary btn-lg btn-block" target="_blank" href="' + sourceUrl + '" id="food-search-btn">Go to recipe</a>';

            var addStuff = $('<div>' + ftitle + time + sourceUrl + '</div>');

            $(".food-container").append(addStuff);

            $('#food-ajax-loader').hide();
            $food.show();
            $poster.show();

            // SHOW EXTRA NEXT PAGE BTN
            $extraFoodBtn.show();

            var $sumFood = $("#foodIcon");
            $sumFood.hide();

            document.body.scrollTop = document.body.scrollHeight;

        });
    });
});
