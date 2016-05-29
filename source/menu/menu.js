(function(){

    // All items we'd like to add
    var navItems = [
        {href: 'index.html', text: 'recent'},
        {href: 'vc.html', text: 'vc'},
        {href: 'password.html', text: 'password'},
        {href: 'browsers.html', text: 'browser'},
        {href: 'know.html', text: 'know this!'},
        {href: 'lifeprotips.html', text: 'life tips'},
        {href: 'business.html', text: 'business'},
        {href: 'gaming.html', text: 'gaming'},
        {href: 'it.html', text: 'it'},
        {href: 'learn.html', text: 'learn'},
        {href: 'technology.html', text: 'tech'},
        {href: 'data.html', text: 'data'},
        {href: 'jokes.html', text: 'jokes'},
        {href: 'life.html', text: 'life advice'},
        {href: 'words.html', text: 'word'},
    ];
    
    navItems.sort(function(a, b){
        if(a.text < b.text) return -1;
        if(a.text > b.text) return 1;
        return 0;
    });
    
    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"),
        navItem, navLink;

    //var navElem =      document.getElementById("nav");

    navElem.appendChild(navList);

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");

        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;

        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].className = "active";

    // Add list to body (or anywhere else)
    window.onload = function () {
        //document.body.appendChild(navElem);
        document.getElementById("nav").appendChild(navElem);
    }

}());
