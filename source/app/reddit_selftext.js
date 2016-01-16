function loadReddit(url)
{
  document.addEventListener('DOMContentLoaded', function () {

    var newsAPI = url;

    $.getJSON(newsAPI, function (json) {

        var children = json.data.children;

        console.log(children);

        $.each(children, function (key, value) {
            var text = '* ' + children[key]['data']['title'] + ' - ' + children[key]['data']['selftext'];
            var article = "<div class='article'>" + text + "</div>";

            $('#news').append(article);
        });
    });
  }, false);
}