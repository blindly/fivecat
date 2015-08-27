$(document).ready()
newsblurAPI = 'http://www.newsblur.com/reader/river_stories&page=1,2'
$.getJSON newsblurAPI, (json) ->
  stories = json.stories
  $.each stories, (key, value) ->
    title = stories[key]['story_title']
    link = stories[key]['story_permalink']
    article_layout = '<div class=\'article\'><a class=\'title\' href=\'' + link + '\'>' + title + '</a></div>'
    $('#news').append article_layout
    return
  return