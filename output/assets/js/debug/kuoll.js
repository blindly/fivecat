(function (w, k, t) {
  w[k] = w[k] || function () {
    var a = arguments;
    return new Promise(function (y, n) {
      (w[k].q = w[k].q || []).push({a: a, d: {y: y, n: n}});
    });
  };
  var s = document.createElement(t),
      f = document.getElementsByTagName(t)[0];
  s.async = 1;
  s.src = 'https://cdn.kuoll.com/bootloader.js';
  f.parentNode.insertBefore(s, f);
}(window, 'kuoll', 'script'));
kuoll('startRecord', { // http://www.kuoll.com/js-doc/module-kuollAPI.html#.startRecord
    API_KEY: "K1T30WZSCYFOOF",
    userId: 1
});