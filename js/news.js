$(document).ready() {
    newsblurAPI = "http://www.newsblur.com/reader/river_stories&page=1,2";
    $.getJSON(newsblurAPI, function (json) {

        var stories = json.stories;

        $.each(stories, function (key, value) {

            var title = stories[key]['story_title'];
            var link = stories[key]['story_permalink'];

            var a = document.createElement('a');
            a.href = link;
            var domain = a.hostname;

            var favicon = "<img src='http://www.google.com/s2/favicons?domain=" + domain + "'/>";

            var article = "<div class='article'>" + favicon + "<a class='title' target='_blank' href='" + link + "'>" + title + "</a></div>";

            $('#news').append(article);
        });
    });
}
