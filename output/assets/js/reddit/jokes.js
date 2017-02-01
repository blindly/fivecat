  var url = "https://www.reddit.com/r/jokes/top.json";

  document.addEventListener('DOMContentLoaded', function () {

    var newsAPI = url;
    $.getJSON(newsAPI, function (json) {
        var children = json.data.children;
        console.log(children);
        $.each(children, function (key, value) {
            var score = children[key]['data']['score'];

            if ( score > 250 ){
                var title = children[key]['data']['title'];
                var text = children[key]['data']['selftext'];

                var textArray = text.split('Edit:');
                text = textArray[0];

                var title_length = title.length;

                if ( title.substring(0, title_length) == text.substring(0, title_length) ){
                    var article = "<article>" + text + "</article>";
                }
                else {
                    var article = "<article>" + title + " - " + text + "</article>";
                }

                $('#news').append(article);
            }
        });
    });
  }, false);
