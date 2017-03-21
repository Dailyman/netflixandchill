$("#resultBtn").on("click", function(){
    $("#output").empty();
    var fUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1';

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

        $("#output").append("<p>" + title + "<br>" + '<img src="' + image + '"/>' + "<br>" + sourceUrl + "</p>");
    });

});
