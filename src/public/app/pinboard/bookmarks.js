/*eslint-env jquery */
/*eslint-disable no-unused-vars */
function show_feed(data) {
  if (data.status === 'ok') {
    let stories = data.stories;
    let bucket = [];
    $.each(stories, function (key) {
      let link = stories[key].link;
      let title = stories[key].title;
      //let favicon_img = stories[key].favicon;
      
      var favicon_img = generateFavicon(link);
      
      title = title.replace("[priv]", "");

      let favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      let article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a></p></article>";

      const isPresent = bucket.includes(title);

      if ( ! isPresent ) {
        bucket.push(title); // Append to Array
        $('#news').append(article);
      }

    });
  }
}