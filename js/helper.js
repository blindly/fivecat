function article_layout(link, title, favicon) {
    "use strict";
    var article = "<div class='article'>" + favicon + "<a class='title' target='_blank' href='" + link + "'>" + title + "</a></div>";
    return article;
}

function url_favicon(data) {
    "use strict";
    var img = "<img src='http://www.google.com/s2/favicons?domain=" + data + "'/>";
    return img;
}

function url_domain(data) {
    "use strict";
    var a = document.createElement('a');
    a.href = data;
    return a.hostname;
}
