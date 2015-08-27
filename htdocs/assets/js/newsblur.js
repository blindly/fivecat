(function() {
  var newsblurAPI;

  $(document).ready();

  newsblurAPI = 'http://www.newsblur.com/reader/river_stories&page=1,2';

  $.getJSON(newsblurAPI, function(json) {
    var stories;
    stories = json.stories;
    $.each(stories, function(key, value) {
      var article_layout, link, title;
      title = stories[key]['story_title'];
      link = stories[key]['story_permalink'];
      article_layout = '<div class=\'article\'><a class=\'title\' href=\'' + link + '\'>' + title + '</a></div>';
      $('#news').append(article_layout);
    });
  });

}).call(this);

