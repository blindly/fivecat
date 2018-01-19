/*eslint-env jquery */
/*eslint-disable no-unused-vars */
function show_feed(data) {
  if (data.status === 'ok') {
    let stories = data.stories;
    let storyBucket = [];
    let urlBucket = [];
    $.each(stories, function (key) {
      let link = stories[key].link;
      let title = stories[key].title;
      let favicon_img = stories[key].favicon;
      
      title = stripTags(title);
      
      let save = "<span class='pull-right'><a href=\"javascript:save_bookmark('" + link + "')\" ><i class='fa fa-bookmark' aria-hidden=\"true\"></i></a></span>";
      var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      var article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a>"+ save +"</p></article>";

      // Check if story title has already been added. No dup stories
      const isTitlePresent = storyBucket.includes(title);

      // Check if url has already been submitted under another title. No dup stories
      const isUrlPresent = urlBucket.includes(link);

      if (!isTitlePresent && !isUrlPresent) {
        storyBucket.push(title); // Append to Array
        urlBucket.push(link); // Append to Array
        $('#news').append(article);
      }

    });
  }
}

