$( document ).ready()
{
  /* Background picture 
  imageUrl = "http://65.181.123.202/bing/bing.jpg";
  $('body').css('background', '#000 url('+imageUrl+') no-repeat');
  */

  /* News */
  newsblurAPI = "http://www.newsblur.com/reader/river_stories&page=1,2";
  $.getJSON(newsblurAPI, function( json ){

      var stories = json.stories;

      $.each( stories, function( key, value) {

        var title = stories[key]['story_title'];
        var link = stories[key]['story_permalink'];
        
        var article_layout = "<div class='article'><a class='title' href='"+ link +"'>"+ title +"</a></div>";
        
        $('#news').append( article_layout );
      });
  });
}