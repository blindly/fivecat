function reddit_txt(url, max_score = 20)
{
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {
        var children = json.data.children;
        $.each(children, function (key, value) {
          var score = children[key].data.score;    
          if ( score > max_score ){
            var text = children[key].data.title + ' - ' + children[key].data.selftext;
            var article = "<article>" + text + "</article>";
            $('#news').append(article);
          }
        });
    });
  }, false);
}