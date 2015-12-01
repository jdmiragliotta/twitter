$(document).ready(function(){
  var newColumn;

  function addTwitter(userData) {
    var colDiv = $("<div>").addClass("col-md-3");
    var tweetDiv = $("<div>").addClass("panel panel-default");
    var userImg = $("<img>").attr("src", "https://pbs.twimg.com/profile_images/728337241/conan_4cred.jpg").addClass("imageSize");
    var userName = $("<h3>").html(userData.user.name).addClass("userName");
    var userHandle =$("<p>").html("@ " +userData.user.screen_name).addClass("userHandle");
    var tweetDate = userData.user.created_at;
    var shortDate = $("<p>").html("&#9679; "+tweetDate.slice(4,10)).addClass("userHandle");
    var userLocation = $("<p>").html(userData.user.location);
    var userTweet = $("<p>").html(userData.text);


    tweetDiv
      .append(userImg)
      .append(userName)
      .append(userHandle)
      .append(shortDate)
      .append(userTweet)
      .append(userLocation)


    colDiv.append(tweetDiv);

    return colDiv;
  }
    

    for (var i=0; i < window.users.length; i++){
      newColumn = addTwitter(window.users[i]);
      $(".row").append(newColumn);

     


  }
});