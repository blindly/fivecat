function show_bookmarks(data) {
  if (data.status === 'ok') {
    let bookmarks = data.bookmarks;
    let storyBucket = [];
    let urlBucket = [];
    $.each(bookmarks, function (key) {

      let link = bookmarks[key].url;
      let favicon_img = bookmarks[key].favicon;

      let favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      let article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + link + "</a></p></article>";
      
      // Check if url has already been submitted under another title. No dup stories
      const isUrlPresent = urlBucket.includes(link);

      if (!isUrlPresent) {
        urlBucket.push(link); // Append to Array
        $('#news').append(article);
      }

    });
  }
}

function save_bookmark(data) {

  var url = "https://api.fivecat.xyz/api/index.php/bookmarks/add?url=" + data;
  $.ajax({
    dataType: 'json',
    url: url,
  });

}
