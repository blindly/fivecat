function json2writer(FEED_ARRAY){
    
    console.log(FEED_ARRAY);
    
    console.log( typeOf(FEED_ARRAY));
    
    /*
    for (var i = 0; i < FEED_ARRAY.length; i++) {
        
        console.log("hello world");
        
        var FEED = FEED_ARRAY[i];
        var favicon_img = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + FEED.favicon + "'/>";
        var article = "<div class='article'><a class='title' target='_blank' href='" + FEED.link + "'>" + favicon_img + FEED.title + "</a></div>";
        $('#news').append(article);
    }
    */
    
    FEED_ARRAY.forEach(function(FEED) {
        console.log(FEED);
    });
    
}