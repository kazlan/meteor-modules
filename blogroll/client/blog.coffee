Template.blogstrip3.items = ->
  return Posts.find {},
    sort:
      'timestamp': -1
    limit: 3