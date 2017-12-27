    let url = "https://www.reddit.com/r/youshouldknow/hot.json";

    document.addEventListener('DOMContentLoaded', function () {

        let newsAPI = url;
        let keyword = "ysk";
        let wordlist = ['ysk,', '-', ':', ': ', ' : ', 'ysk'];
        let removedList = ['request','how','where','who'];

        $.getJSON(newsAPI, function (json) {
            var children = json.data.children;
            $.each(children, function (key, value) {
                let score = children[key].data.score;    
                if ( score > 20 ){
                    var title = children[key].data.title;
                    title = title.toLowerCase();
                    if ( title.substring(0, 3) == keyword ) {
                      
                        title = replaceInString(title, wordlist, '');
                        
                        let titleArray = title.split(' ');
                        titleArray = removeFromArray( titleArray, '');
                                                
                        if ( ! wordMatch( titleArray[0], removedList ) ) {
                            
                            let article = "<article><p>" + title + "</p></article>";
                            $('#news').append(article);
                        
                        }
                    }
                }
            });
        });
    }, false);