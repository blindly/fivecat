document.addEventListener('DOMContentLoaded', function () {

  var newsAPI = "https://www.reddit.com/r/jokes/top.json";
  let max = 100;
  $.getJSON(newsAPI, function (json) {

    var children = json.data.children;
    console.log(children);
    $.each(children, function (key, value) {
      var score = children[key]['data']['score'];

      if (score > max) {
        var title = children[key]['data']['title'];
        var text = children[key]['data']['selftext'];

        // Start of about reddit
        var isAboutReddit = text.indexOf('Reddit') > -1;
        if (isAboutReddit) {
          show = false;
        } else
          show = true;
        // End of about reddit

        var textArray = text.split('Edit:');
        text = textArray[0];

        var title_length = title.length;

        if (title.substring(0, title_length) == text.substring(0, title_length)) {
          var article = "<article><p>" + text + "</p></article>";
        } else {
          var article = "<article><p>" + title + " - " + text + "</p></article>";
        }

        if (show)
          $('#news').append(article);
      }
    });
  });
}, false);