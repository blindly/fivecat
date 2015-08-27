$( document ).ready()
{
  /* News */
  newsLinks = ["http://www.newsblur.com/reader/river_stories&page=1,2", "http://www.reddit.com/r/hackernews/hot.json"];
  $.each( newsLinks, function( newslink){

    $.getJSON(newslink, function( json ){

        var stories = json.stories;

        $.each( stories, function( key, value) {

          var title = stories[key]['story_title'];
          var link = stories[key]['story_permalink'];

          var article_layout = "<div class='article'><a class='title' href='"+ link +"'>"+ title +"</a></div>";

          $('#news').append( article_layout );
        });
    });

  });
}
