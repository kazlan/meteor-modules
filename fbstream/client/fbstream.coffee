Meteor.startup ->
  data = Meteor.call "fetch_data", (result)->
    console.log result