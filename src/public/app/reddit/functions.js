function reddit(url, instapaper = false) {
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {
      var children = json.data.children;
      $.each(children, function (key, value) {
        var title = children[key]['data']['title'];
        var link = children[key]['data']['url'];

        var favicon_img = generateFavicon(link);

        if ( instapaper ) 
          link = instapaperIt(link);
      
        /*
        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
        var article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a></p></article>";
        */
        
      let save = "<span class='pull-right'><a href=\"javascript:save_bookmark('" + link + "')\" ><i class='fa fa-bookmark' aria-hidden=\"true\"></i></a></span>";
      var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      var article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a>"+ save +"</p></article>";

        $('#news').append(article);
      });
    });
  }, false);
}

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
              var article = "<article><p>" + text + "</p></article>";
              $('#news').append(article);
            }
            
          }
        });
    });
  }, false);
}

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

