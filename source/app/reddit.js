function loadReddit(url)
{
  document.addEventListener('DOMContentLoaded', function () {

    var newsAPI = url;

    $.getJSON(newsAPI, function (json) {

        var children = json.data.children;

        console.log(children);

        $.each(children, function (key, value) {
            var title = children[key]['data']['title'];
            var link = children[key]['data']['url'];
            var a = document.createElement('a');
            a.href = link;
            var domain = a.hostname;

            var instapaper = 'https://www.instapaper.com/text?u=';
            link = instapaper + link;

            var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='http://www.google.com/s2/favicons?domain=" + domain + "'/>";

            var article = "<div class='article'><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></div>";

            $('#news').append(article);
        });
    });
  }, false);
}