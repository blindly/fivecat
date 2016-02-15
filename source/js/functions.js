function getParmsFromURLHash(url) {
    var parms = {}, pieces, parts, i;
    var hash = url.lastIndexOf("#");
    if (hash !== -1) {
        // isolate just the hash value
        url = url.slice(hash + 1);
    }
    var question = url.indexOf("?");
    if (question !== -1) {
        url = url.slice(question + 1);
        pieces = url.split("&");
        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split("=");
            if (parts.length < 2) {
                parts.push("");
            }
            parms[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
    }
    return parms;
}

function generateFavicon(link){
    var a = document.createElement('a');
    a.href = link;
    var domain = a.hostname;

    var favicon = "http://www.google.com/s2/favicons?domain=" + domain;

    return favicon;
}

function instapaperIt(link){
    var instapaper = 'https://www.instapaper.com/text?u=';
    link = instapaper + link;
    return link;
}

function bingIt(words){
  var bing = 'https://www.bing.com/search?q=';
  bing = bing + words;
  return bing;
}

function googleIt(words){
  var google = 'https://www.google.com/search?client=opera&q=';
  google = google + words;
  return google;
}