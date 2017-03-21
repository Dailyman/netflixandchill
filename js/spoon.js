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

        $("#food-container").append("<figure>" + '<img class="img-responsive" src="' + image + '">' + "</figure>");
        $("#food-title").html(title);
    });

});
