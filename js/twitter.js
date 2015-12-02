$(document).ready(function(){
  var newColumn;

  function addTwitter(userData) {
    var colDiv = $("<div>").addClass("col-md-4");
    var tweetDiv = $("<div>").addClass("panel panel-default");
    var tweetRow = $("<div>").addClass("row");
    var tweetColTwo = $("<div>").addClass("col-md-2");
    var tweetColTen = $("<div>").addClass("col-md-10");
    var userImg = $("<img>").attr("src", "https://pbs.twimg.com/profile_images/728337241/conan_4cred.jpg").addClass("imageSize");
    var userName = $("<h3>").html(userData.user.name).addClass("userName");
    var userHandle =$("<p>").html("@ " +userData.user.screen_name).addClass("userHandle");
    var tweetDate = userData.user.created_at;
    var shortDate = $("<p>").html("&#9679; "+tweetDate.slice(4,10)).addClass("userHandle");
    var userTweet = $("<p>").html(userData.text).addClass("tweet");
    var reply = $("<span>").addClass("fa fa-reply reply");
    var retweetIcon = $("<span>").addClass("fa fa-retweet retweet icon");
    var favoriteIcon = $("<span>").addClass("fa fa-heart icon favorite");
    var moreIcon = $("<span>").html("&#9679;&#9679;&#9679;").addClass("icon more");
    var retweet = $("<p>").html(userData.retweet_count).addClass("number retweet");
    var favorite = $("<p>").html(userData.user.favourites_count).addClass("number favorite");





    tweetDiv
      .append(tweetRow
        
        .append(tweetColTwo
          .append(userImg))

        .append(tweetColTen
          .append(userName)
          .append(userHandle)
          .append(shortDate)
          .append(userTweet)
          .append(reply)
          .append(retweetIcon)
          .append(retweet)
          .append(favoriteIcon)
          .append(favorite)
          .append(moreIcon)
        )
      )
      


    colDiv.append(tweetDiv);

    return colDiv;
  }
    

    for (var i=0; i < window.users.length; i++){
      newColumn = addTwitter(window.users[i]);
      $(".row").append(newColumn);

     


  }
});