(function(){

    // All items we'd like to add
    var navItems = [
        {href: 'index.html', text: 'Recent'},
        {href: 'hn.html', text: 'Hacker News'},
        {href: 'business.html', text: 'Business'},
        {href: 'world.html', text: 'World'},
        {href: 'technology.html', text: 'Tech'},
        {href: 'browsers.html', text: 'Web Browsers'},
        {href: 'internet.html', text: 'Internet'},
        {href: 'life.html', text: 'Life'}
    ];

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