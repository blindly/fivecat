google.load("feeds", "1");

function initialize(feeds) {
    feeds.forEach(function (entry) {
        var feed = new google.feeds.Feed(entry);
        feed.load(function (result) {
            if (!result.error) {
                for (var num = 0; num < result.feed.entries.length; num++) {
                    var entry = result.feed.entries[num];
                    var title = entry.title;
                    var link = entry.link;
                    var a = document.createElement('a');
                    a.href = link;
                    var domain = a.hostname;

                    var instapaper = 'https://www.instapaper.com/text?u=';
                    link = instapaper + link;

                    var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='http://www.google.com/s2/favicons?domain=" + domain + "'/>";

                    var article = "<div class='article'><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></div>";

                    $('#news').append(article);
                }
            }
        });
    });
}

function fetchFeeds(name) {
  var data = {
      "feeds": {
          "technology": [
            "http://feeds.feedburner.com/PuppetLabs",
            "https://about.gitlab.com/atom.xml",
            "http://www.vmwareblogs.com/rss.xml?flag=2",
            "http://feeds.feedburner.com/wmpoweruser",
            "http://blogs.msdn.com/b/vscode/rss.aspx",
            "https://godevops.de/feed/",
            "http://feeds.feedburner.com/planetpuppet"
          ],
          "browsers": [
            "http://feeds.feedburner.com/FavoriteBrowser",
            "https://vivaldi.net/blogs/teamblog?format=feed&type=rss",
            "https://blog.mozilla.org/feed/",
            "http://blogs.opera.com/desktop/feed"
          ],
          "business": [
            "http://www.marketwatch.com/rss/topstories",
            "http://feeds.reuters.com/reuters/businessNews?format=xml",
            "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
            "http://www.marketwatch.com/rss/marketpulse"
          ],
          "gaming": [
            "http://n4g.com/rss/news?channel=pc&sort=latest",
            "http://feeds.ign.com/ign/pc-all",
            "http://www.engadget.com/tag/@gaming/rss.xml"
          ],
          "life": [
            "http://feeds.gawker.com/lifehacker/excerpts.xml",
            "http://zenhabits.net/feed/",
            "http://feeds.feedburner.com/Workawesome",
            "http://feeds.feedburner.com/Addictivetips",
            "http://feeds.feedburner.com/getrichslowly",
            "http://feeds.lifehack.org/Lifehack",
            "http://feeds.feedburner.com/thesimpledollar"
          ],
          "world": [
            "http://feeds.bbci.co.uk/news/rss.xml",
            "https://www.reddit.com/r/worldnews/hot.rss",
            "http://feeds.bbci.co.uk/news/world/rss.xml",
            "http://feeds.feedburner.com/BreakingDefense"
          ]
      }
    }

    var feedArray = data.feeds[name];
    return feedArray;
}

