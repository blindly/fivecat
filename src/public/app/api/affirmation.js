function get_affirmation() {
  document.addEventListener('DOMContentLoaded', function () {
    url = "https://api.fivecat.xyz/api/index.php/affirmation";
    $.getJSON(url, function (json) {
      var affirmation = json.affirmation;
      var div = "<blockquote class='align-center'>" + affirmation + "</blockquote>";
      $('#affirmation').append(div);
    });
  }, false);
}

get_affirmation();