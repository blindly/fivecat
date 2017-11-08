function reddit_lpt(url, max_score = 20, emoticon = 'em-smiley', search_term = 'LPT:')
{
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {
        var children = json.data.children;
        var emoji = "<i class=\"em "+ emoticon +" \"></i>";
        $.each(children, function (key, value) {
          var score = children[key].data.score;    
          if ( score > max_score ){
            var text = children[key].data.title + ' - ' + children[key].data.selftext;

            if ( text.search(search_term) === 0 )
            {
              text = text.replace(search_term, emoji);
              var article = "<article>" + text + "</article>";
              $('#news').append(article);
            }
            
          }
        });
    });
  }, false);
}