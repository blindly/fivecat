function reddit_txt(url)
{
  document.addEventListener('DOMContentLoaded', function () {
    $.getJSON(url, function (json) {
        var children = json.data.children;
        $.each(children, function (key, value) {
            var text = '* ' + children[key]['data']['title'] + ' - ' + children[key]['data']['selftext'];
            var article = "<article>" + text + "</article>";
            $('#news').append(article);
        });
    });
  }, false);
}