var bang, bangs, config, default_template, entry, get_query, i, j, len, len1, query, ref, search;

config = [
  {
    "fullname": "www.google.com",
    "pattern": "https://www.google.com/search?q={{query}}",
    "bangs": ["g", "gus"]
  }, {
    "fullname": "www.wikipedia.org",
    "pattern": "https://www.wikipedia.org/w/index.php?search={{query}}",
    "bangs": ["w", "wiki"]
  }, {
    "fullname": "smile.amazon.com",
    "pattern": "https://smile.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords={{query}}",
    "bangs": ["a", "az"]
  }, {
    "fullname": "www.youtube.com",
    "pattern": "https://www.youtube.com/results?search_query={{query}}",
    "bangs": ["yt", "y"]
  }, {
    "fullname": "www.duckduckgo.com",
    "pattern": "https://duckduckgo.com/?q={{query}}",
    "bangs": ["ddg", "d"]
  }, {
    "fullname": "www.github.com",
    "pattern": "https://github.com/search?utf8=%E2%9C%93&q={{query}}&type=",
    "bangs": ["gh"]
  }, {
    "fullname": "www.stackoverflow.com",
    "pattern": "https://stackoverflow.com/search?q={{query}}",
    "bangs": ["so"]
  }, {
    "fullname": "www.bing.com",
    "pattern": "https://www.bing.com/search?q={{query}}",
    "bangs": ["b", "bing"]
  }, {
    "fullname": "www.reddit.com",
    "pattern": "https://www.reddit.com/r/{{query}}",
    "bangs": ["r", "rd"]
  }, {
    "fullname": "developer.mozilla.org",
    "pattern": "https://developer.mozilla.org/en-US/search?q={{query}}&topic=api&topic=css&topic=canvas&topic=html&topic=http&topic=js&topic=mobile&topic=apps&topic=svg&topic=webdev&topic=webext&topic=webgl",
    "bangs": ["mdn"]
  }, {
    "fullname": "gotourl",
    "pattern": "http://{{query}}",
    "bangs": [">"]
  }, {
    "fullname": "EasyCounter",
    "pattern": "https://www.easycounter.com/report/{{query}}",
    "bangs": ["ec"]
  }, {
    "fullname": "Whois Domain",
    "pattern": "https://whois.domaintools.com/{{query}}",
    "bangs": ["who"]
  }, {
    "fullname": "publicwww.org",
    "pattern": "https://publicwww.com/websites/{{query}}/",
    "bangs": ["www"]
  }
];


default_template = config[0].pattern;

bangs = {};

for (i = 0, len = config.length; i < len; i++) {
  entry = config[i];
  ref = entry.bangs;
  for (j = 0, len1 = ref.length; j < len1; j++) {
    bang = ref[j];
    bangs[bang] = entry;
  }
}

get_query = function () {
  var input, query;
  input = window.location.search;
  if (input && input.match(/^\?q=/)) {
    query = input.substring(3).replace(/\/$/, '').replace(/\+/g, ' ');
    return decodeURIComponent(query);
  } else {
    return void 0;
  }
};

search = function (sentence, bangs, default_template) {
  var index, k, len2, template, url, word, words;
  template = default_template;
  words = sentence.split(/\s+/);

  index = 0;
  for (k = 0, len2 = words.length; k < len2; k++) {
    word = words[k];

    if (word.substring(0, 1) === '!' && bangs[word.substring(1)]) {
      words.splice(index, 1);
      template = bangs[word.substring(1)].pattern;
      k = 0;
      len2 = len2 - 1;
    }
    index++;
  }
  url = MicroMustache.render(template, {
    query: words.join('+')
  });

  return window.location.href = url;
};

query = get_query();

if (query) {
  search(query, bangs, default_template);
}

// ---
// generated by coffee-script 1.9.2
