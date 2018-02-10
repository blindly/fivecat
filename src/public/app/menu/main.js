(function(){
    // All items we'd like to add
    var navItems = [
        {href: '/read/trending', text: 'trending'},
        {href: '/read/startups', text: 'startups'},
        {href: '/read/webdev', text: 'web dev'},
        {href: '/read/crypto', text: 'altcoin'},
        {href: '/read/saved', text: 'saved links'},
      
        {href: '/read/tech', text: 'technology'},
        {href: '/read/programming', text: 'programming'},

        {href: '/read/enterprise', text: 'enterprise'},

        {href: '/read/week', text: 'top weekly'},
      
        {href: '/read/know', text: 'know this!'},
        {href: '/read/lifeprotips', text: 'life tips'},
        {href: '/read/learn', text: 'learn'},
        //{href: '/read/life', text: 'life advice'},

        //{href: '/read/chromeos', text: 'chrome os'},
        {href: '/read/browsers', text: 'browsers'},
        {href: '/read/netsec', text: 'Network'},

        {href: '/read/password', text: 'password'},
        {href: '/read/gaming', text: 'gaming'},
        //{href: '/read/data', text: 'interesting'},
        //{href: '/read/korea', text: 'korea'},
        //{href: '/read/kdrama', text: 'kdrama'},
        {href: '/read/jokes', text: 'jokes'},
        //
    ];

    // Sorts the menu items to be in alphabetical order
    /*
    navItems.sort(function(a, b){
        if(a.text < b.text) return -1;
        if(a.text > b.text) return 1;
        return 0;
    });
    */

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
        navLink.innerHTML = navItems[i].text.toUpperCase();

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
