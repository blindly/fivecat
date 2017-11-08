  var url = "https://www.reddit.com/r/lifeprotips/hot.json";

  document.addEventListener('DOMContentLoaded', function () {

    var newsAPI = url;
    $.getJSON(newsAPI, function (json) {
        var children = json.data.children;
        $.each(children, function (key, value) {
            var score = children[key].data.score;    
            if ( score > 10 ){
                let title = children[key].data.title;
                let selftext = children[key].data.selftext;
                title = title.toLowerCase();
                selftext = selftext.toLowerCase();

                let lpt = title.indexOf("lpt");

                if ( lpt > -1 ) {
                  let request = title.indexOf("request");

                  if ( request < 0 ) {

                    let titleLPT = title.split("lpt");
                    title = titleLPT[1];

                    title = title.replace(" -", "").replace(": ", "").replace(",", "").replace("lpt", "");

                    console.log(title);
                    console.log(selftext.length);
                    
                    if ( selftext.length < 500) {
                      title = title + ".  " + selftext;
                    }
                    
                    let titleEdit = title.split("edit:");
                    title = titleEdit[0];

                    var article = "<article>" + title + "</article>";
                    $('#news').append(article);
                  }
                }
            }
        });
    });
  }, false);