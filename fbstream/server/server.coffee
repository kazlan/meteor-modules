access_token = "37123292139|CuykkCCRPI12hxaIFXUOjfv_SLw"
id = 379749722147919 #centro optico sanz
Meteor.methods 
  fetch_data: ->
    url = "https://graph.facebook.com/" + id + "/feed?access_token=" + access_token
    data = Meteor.http.get url, (err, result) ->
      if err
        console.log err
        return false
      else
        console.log result
        return result
    