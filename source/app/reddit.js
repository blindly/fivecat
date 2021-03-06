function loadReddit(url)
{
  document.addEventListener('DOMContentLoaded', function () {
    var newsAPI = url;
    $.getJSON(newsAPI, function (json) {
        var children = json.data.children;
        $.each(children, function (key, value) {
            var title = children[key]['data']['title'];
            var link = children[key]['data']['url'];
            link = instapaperIt(link);
            var favicon_img = generateFavicon(link);
            var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
            var article = "<div class='article'><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></div>";
            $('#news').append(article);
        });
    });
  }, false);
}