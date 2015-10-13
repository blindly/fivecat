    google.load("feeds", "1");

    function initialize() {
        var feeds = ['http://www.marketwatch.com/rss/topstories',
            'http://www.marketwatch.com/rss/marketpulse'];

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
