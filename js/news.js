$(document).ready() {
    newsblurAPI = "http://www.newsblur.com/reader/river_stories&page=1,2";
    $.getJSON(newsblurAPI, function (json) {

        var stories = json.stories;

        $.each(stories, function (key, value) {

            var title = stories[key]['story_title'];
            var link = stories[key]['story_permalink'];
            var domain = url_domain(link);
            var favicon = url_favicon(domain);
            var article = article_layout(link, title, favicon);

            $('#news').append(article);
        });
    });
}
