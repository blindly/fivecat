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

    var favicon = "//www.google.com/s2/favicons?domain=" + domain;

    return favicon;
}

function getDomain(link){
    var a = document.createElement('a');
    a.href = link;
    var domain = a.hostname;

    return domain;
}

function instapaperIt(link){
    var instapaper = '//www.instapaper.com/text?u=';
    link = instapaper + link;
    return link;
}

function bingIt(words){
  var bing = "//www.bing.com/search?q=";
  bing = bing + encodeURI(words);
  return bing;
}

function googleIt(words){
  var google = "//www.google.com/search?client=opera&q=";
  google = google + encodeURI(words);
  return google;
}

function replaceInString(myString, wordList, replaceWith){
    for (var i = 0; i < wordList.length; i++){
        myString = myString.replace(wordList[i], replaceWith)
    }
    return myString;
}

function wordMatch(keyWord, wordList){
    for (var i = 0; i < wordList.length; i++){

        /*
        console.log('--');
        console.log(keyWord)
        console.log(wordList[i]);
        console.log( (keyWord == wordList[i] ) );
        console.log('--');
        */

        if (keyWord == wordList[i] ){
            return true;
        }
    }
    return false;
}

function removeFromArray(array, word){
    var i = array.indexOf( word );
    if(i != -1) {
        array.splice(i, 1);
    }

    return array;
}

function findReplace(string, findWord, replaceWord) {

  string = string.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var stringArray = string.split(" ");

  for(var i = 0; i < stringArray.length; i++) {

    if(stringArray[i].toUpperCase() ==  findWord.toUpperCase()) {
      stringArray[i] = replaceWord;
    }
  }

  return stringArray.join(" ");
}

function stripTags(OriginalString) {
  var StrippedString = OriginalString.replace(/(<([^>]+)>)/ig,"");
  return StrippedString;
}
