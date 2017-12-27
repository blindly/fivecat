  var url = "https://www.reddit.com/r/TodayILearned/hot.json";

  document.addEventListener('DOMContentLoaded', function () {

    var newsAPI = url;
    var keyword = "til";
    $.getJSON(newsAPI, function (json) {
        var children = json.data.children;
        $.each(children, function (key, value) {
            var score = children[key]['data']['score'];    
            if ( score > 20 ){
                var title = children[key]['data']['title'];
                title = title.toLowerCase();
                if ( title.substring(0, 3) == keyword ) {
                    if ( title.substring(4, 11) != "request" ) {

                        title = title.replace( keyword, "");
                        title = title.replace("-", "");
                        title = title.replace(" - ", "");
                        title = title.replace(": ", "");
                        title = title.replace(" : ", "");

                        var article = "<article><p>" + title + "</p></article>";
                        $('#news').append(article);
                    }
                }
            }
        });
    });
  }, false);