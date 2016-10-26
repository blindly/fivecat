// var content = document.getElementById('news');
function rss2json(FEED_URLS) {
    var FEED_ARRAY = [];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            if (data.status == 'ok') {
                var output;
                for (var i = 0; i < data.items.length; ++i) {
                    var link = data.items[i].link;
                    var title = data.items[i].title;
                    var pubDate = data.items[i].pubDate;

                    // Bing links are redirected but redirection doesn't work
                    
                    link = decodeURIComponent(link);
                    link = link.replace(/amp;/g, '');
                    var parms = getParmsFromURLHash(link);

                    if (parms.url) {
                        link = parms.url;
                    }
                    

                    var favicon_img = generateFavicon(link);
                    var instapaper = instapaperIt(link);
                    
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
                    FEED_OBJ.instapaper = instapaper;

                    FEED_ARRAY.push(FEED_OBJ);
                }
                
                FEED_ARRAY = uniq(FEED_ARRAY, 'link');
                
                //console.log(non_duplidated_data);
                
                //return FEED_ARRAY;
            }
        }
    };
    
    /*
    xhr.open('GET', '//rss2json.com/api.json?rss_url=' + FEED_URL, true);
    xhr.send();
    */
    
    
    for (var i = 0; i < FEED_URLS.length; i++) { 
        xhr.open('GET', '//rss2json.com/api.json?rss_url=' + FEED_URLS[i], true);
        xhr.send();
    }
     
    FEED_ARRAY = FEED_ARRAY.sort(sortFunction);   
    return FEED_ARRAY;
}
