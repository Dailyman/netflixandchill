 /*
   Script för random-film.
   Använder sig av Unogs-API.
*/

var $movie= $('.movieInfo'); //Hämtar elementet.
$movie.hide(); //Döljer element.


$( "#get-random-movie-btn" ).click(function() {
   /*
   Hämtar alla genre id från APIet.
   Sorterar sedan ut id för den genre som användaren valt.
   */
   var $filmInfo= $('#filmInfo'); //Hämtar elementet.
   $filmInfo.hide(); //Döljer element.
   var max=2017;
   var min=1970;
   var urlXX;
   randomSYear=Math.floor(Math.random() * (max - min + 1)) + min;
   randomEYear=randomSYear+2;
   var selGenre=$("#movie-type-select").val();
   selGenre= selGenre.split(',');

   //Ajax-anrop
   $.ajax({
      url: 'https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres', 
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data) { console.dir((data.source)); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
         xhr.setRequestHeader("X-Mashape-Authorization", "dd4HqXOyNRmsh069sHourYvxlvLqp1VqxVxjsnNFFHyUuYXBfj"); //API-Nyckel
      },
      success: function (response) {
         genreId=response.ITEMS[selGenre[0]][selGenre[1]];
         selGenre=genreId.join("%2C");
         urlXX='/api.cgi?q={query}-!'+randomSYear+','+randomEYear+'-!0,5-!0,10-!'+selGenre+'-!Movie-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and';
         randomMovie()
      }
   });

   function randomMovie (){
   /*
   Funktion som hämtar filmer från API.
   Film väljs sedan ut med hjälp av random
   */
      $.ajax({
         url: 'https://unogs-unogs-v1.p.mashape.com'+urlXX, 
         type: 'GET',
         data: {},
         dataType: 'json',
         success: function(data) { console.dir((data.source)); },
         error: function(err) { alert(err); },
         beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "dd4HqXOyNRmsh069sHourYvxlvLqp1VqxVxjsnNFFHyUuYXBfj"); //API-Nyckel.
         },
         success: function (response) {
            count = response.COUNT;
            if (count>100) {
               max=99;
            }
            else{
               max=count-1;
            }
            min=0;
            random=Math.floor(Math.random() * (max - min + 1)) + min;
            title=response.ITEMS[random][1];
            year=response.ITEMS[random][7];
            posterlink=response.ITEMS[random][2];
            length=response.ITEMS[random][8];
            plot=response.ITEMS[random][3];

            $(".title").html(title);
            $(".year").html(year);
            $(".length").html(length);
            $(".plot").html(plot);
            $movie.show();
            $(".posterbox").html("<img src="+posterlink+" alt=some_text class='img-responsive' id='poster'>");
         }

      });
   }
});










