    google.load("feeds", "1");

    function initialize() {
        var feeds = ['http://feeds.feedburner.com/FavoriteBrowser',
            'https://vivaldi.net/blogs/teamblog?format=feed&type=rss',
            'https://blog.mozilla.org/feed/',
            'http://blogs.opera.com/desktop/feed',
            'http://feeds.feedburner.com/PuppetLabs',
            'http://blog.docker.com/feed/',
            'https://about.gitlab.com/atom.xml',
            'http://www.vmwareblogs.com/rss.xml?flag=2'];
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

                        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='http://www.google.com/s2/favicons?domain=" + domain + "'/>";

                        var article = "<div class='article'><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></div>";

                        $('#news').append(article);
                    }
                }
            });
        });
    }

    google.setOnLoadCallback(initialize);
