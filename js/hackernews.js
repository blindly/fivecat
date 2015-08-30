$( document ).ready()
{
  /* News */
  var newsAPI = "http://www.reddit.com/r/hackernews/hot.json";

  $.getJSON(newsAPI, function( json ){

      var children = json.data.children;

      console.log(children);

      $.each( children, function( key, value) {
        var title = children[key]['data']['title'];
        var link = children[key]['data']['url'];
        var article_layout = "<div class='article'><a class='title' href='"+ link +"'>"+ title +"</a></div>";

        $('#news').append( article_layout );
      });
  });
}
