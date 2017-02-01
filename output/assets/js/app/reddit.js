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
      
        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
        var article = "<article><p><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></p></article>";

        $('#news').append(article);
      });
    });
  }, false);
}