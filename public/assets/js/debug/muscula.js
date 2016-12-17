window.Muscula = { settings:{
    logId:'4b9169a2-be76-4d4e-be49-6e7f0f988d23', suppressErrors: false
}};
(function () {
    var m = document.createElement('script'); m.type = 'text/javascript'; m.async = true;
    m.src = (window.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//musculahq.appspot.com/Muscula7.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(m, s);
    window.Muscula.run=function(){var a;eval(arguments[0]);window.Muscula.run=function(){};};
    window.Muscula.errors=[];window.onerror=function(){window.Muscula.errors.push(arguments);
    return window.Muscula.settings.suppressErrors===undefined;}
})();