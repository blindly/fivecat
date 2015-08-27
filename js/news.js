$( document ).ready()
{
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
