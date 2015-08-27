$( document ).ready()
{
  /* News */
  var newsAPI = "http://www.reddit.com/r/hackernews/hot.json";

  console.log('hello world');

  $.getJSON(newsAPI, function( json ){

      console.log(json);

      var children = json.data.children;

      console.log(children);

      $.each( children, function( key, value) {
        var title = children[key]['data']['title'];
        var link = children[key]['data']['permalink'];

        console.log(title);

        var article_layout = "<div class='article'><a class='title' href='"+ link +"'>"+ title +"</a></div>";

        $('#news').append( article_layout );
      });
  });
}
