

var $movie= $('#movieInfo');
$movie.hide();

$( "#get-random-movie-btn" ).click(function() {
   var jsonData;
   var max=2017;
   var min=1970;
   var urlXX;
   randomSYear=Math.floor(Math.random() * (max - min + 1)) + min;
   randomEYear=randomSYear+2;
   var selGenre=$("#movie-type-select").val(); // The value of the selected option
   selGenre= selGenre.split(',');

   //Hämta genre-id
   $.ajax({
      url: 'https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres', 
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) { console.dir((data.source)); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
         xhr.setRequestHeader("X-Mashape-Authorization", "dd4HqXOyNRmsh069sHourYvxlvLqp1VqxVxjsnNFFHyUuYXBfj"); // Enter here your Mashape key
      },
      // work with the response
      success: function (response) {
         genreId=response.ITEMS[selGenre[0]][selGenre[1]];
         selGenre=genreId.join("%2C");
         urlXX='/api.cgi?q={query}-!'+randomSYear+','+randomEYear+'-!0,5-!0,10-!'+selGenre+'-!Movie-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and';
         randomMovie()
      }
   });


   //Hämta film från AP
   function randomMovie (){
      $.ajax({
         url: 'https://unogs-unogs-v1.p.mashape.com'+urlXX, 
         type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
         data: {}, // Additional parameters here
         dataType: 'json',
         success: function(data) { console.dir((data.source)); },
         error: function(err) { alert(err); },
         beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "dd4HqXOyNRmsh069sHourYvxlvLqp1VqxVxjsnNFFHyUuYXBfj"); // Enter here your Mashape key
         },

         // work with the response
         success: function (response) {
            count = response.COUNT; // Antal objekt i arrayen.
            if (count>100) {
               max=99;
            }
            else{
               max=count-1;
            }
            min=0; //Sätter min.
            random=Math.floor(Math.random() * (max - min + 1)) + min; //Random vilket objekt som ska väljas från svaret.
            title=response.ITEMS[random][1];
            year=response.ITEMS[random][7];
            posterlink=response.ITEMS[random][2];
            length=response.ITEMS[random][8];
            plot=response.ITEMS[random][3];

            $("#title").html(title);
            $("#year").html(year);
            $("#length").html(length);
            $("#plot").html(plot);
            $movie.show();
            $("#posterbox").html("<img src="+posterlink+" alt=some_text class='img-responsive' id='poster'>");
         }

      });
   }
});










