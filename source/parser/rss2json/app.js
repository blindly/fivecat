// var content = document.getElementById('news');
function rss2json(FEED_URL) {
    var FEED_ARRAY = [];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            if (data.status == 'ok') {
                var output;
                for (var i = 0; i < data.items.length; ++i) {
                    link = data.items[i].link;
                    title = data.items[i].title;
                    pubDate = data.items[i].pubDate;

                    // Bing links are redirected but redirection doesn't work
                    link = decodeURIComponent(link);
                    link = link.replace(/amp;/g, '');
                    parms = getParmsFromURLHash(link);

                    if (parms.url) {
                        link = parms.url;
                    }

                    var favicon_img = generateFavicon(link);
                    link = instapaperIt(link);

                    /*
                    var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
                    var article = "<div class='article'><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></div>";
                    $('#news').append(article);
                    */

                    var FEED_OBJ = {};
                    FEED_OBJ.favicon = favicon_img;
                    FEED_OBJ.link = link;
                    FEED_OBJ.title = title;
                    FEED_OBJ.pubDate = pubDate;
                    FEED_ARRAY.push(FEED_OBJ);
                }
                return FEED_ARRAY;
            }
        }
    };
    xhr.open('GET', '//rss2json.com/api.json?rss_url=' + FEED_URL, true);
    xhr.send();
}
