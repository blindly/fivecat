document.addEventListener('DOMContentLoaded', function () {
  let url = "//www.newsblur.com/reader/river_stories&page=1,2";
  $.getJSON(url, function (json) {

    var stories = json.stories;

    $.each(stories, function (key, value) {
      var title = stories[key]['story_title'];
      var link = stories[key]['story_permalink'];

      var favicon_img = generateFavicon(link);
      link = instapaperIt(link);

      var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      var article = "<article><p><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></p></article>";

      $('#news').append(article);
    });
  });
}, false);