document.addEventListener('DOMContentLoaded', function () {
    var newsblurAPI = "http://www.newsblur.com/reader/river_stories&page=1,2";
    $.getJSON(newsblurAPI, function (json) {

        var stories = json.stories;

        $.each(stories, function (key, value) {

            var title = stories[key]['story_title'];
            var link = stories[key]['story_permalink'];

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
