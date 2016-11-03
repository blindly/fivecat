(function(){

    // All items we'd like to add
    var navItems = [
        {href: 'index', text: 'river'},
        {href: 'recent', text: 'recent'},
        {href: 'startups', text: 'startups'},
        //{href: 'trending', text: 'trending'},
        //{href: 'wikinews', text: 'wikinews'},
        {href: 'password', text: 'password'},
        {href: 'browsers', text: 'browsers'},
        {href: 'know', text: 'know this!'},
        {href: 'lifeprotips', text: 'life tips'},
        {href: 'security', text: 'security'},
        // {href: 'business', text: 'business'},
        {href: 'gaming', text: 'gaming'},
        //{href: 'it', text: 'it'},
        {href: 'learn', text: 'learn'},
        // {href: 'technology', text: 'tech'},
        {href: 'data', text: 'interesting'},
        {href: 'jokes', text: 'jokes'},
        {href: 'life', text: 'life advice'},
        {href: 'words', text: 'word'},
        //{href: 'jstor', text: 'jstor'},
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
        navLink.inne = navItems[i].text;

        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].className = "active";

    // Add list to body (or anywhere else)
    window.onload = function () {
        //document.body.appendChild(navElem);
        document.getElementById("nav").appendChild(navList);
    }

}());
