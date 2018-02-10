/*eslint-env jquery */
/*eslint-disable no-unused-vars */
function feed_api(url) {
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {

      var stories = json.stories;

      $.each(stories, function (key) {
        var link = stories[key].link;
        var title = stories[key].title;
        var favicon_img = stories[key].favicon;

        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
        var article = "<article><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a></article>";

        $('#news').append(article);
      });
    });
  }, false);
}

function show_bookmarks(url) {
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {

      var bookmarks = json.bookmarks;

      $.each(bookmarks, function (key) {
        var link = bookmarks[key].link;
        var favicon_img = bookmarks[key].favicon;

        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
        var article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + link + "</a></p></article>";

        $('#news').append(article);
      });
    });
  }, false);
}