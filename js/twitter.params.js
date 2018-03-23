var configProfile = {
  profile: { screenName: 'IronMaiden' },
  dataOnly: true,
  maxTweets: 3,
  customCallback: populateTpl
};

function populateTpl(tweets) {
  var element = document.getElementById('twitterNews');
  var html = '<div class="row justify-content-center">';
  for (var i = 0, lgth = tweets.length; i < lgth; i++) {
    var tweetObject = tweets[i];
    html +=
      '<div class="col-4">' +
      (tweetObject.image
        ? '<div class="tweet-img"><img src="' + tweetObject.image + '" /></div>'
        : '') +
      '<p class="tweet-content">' +
      tweetObject.tweet +
      '</p>' +
      '<p class="tweet-infos">Posted on the ' +
      tweetObject.time +
      ', by ' +
      tweetObject.author +
      '</p>' +
      '</div>';
  }
  html += '</div>';
  element.innerHTML = html;
}

twitterFetcher.fetch(configProfile);
