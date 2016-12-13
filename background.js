// when three keywords are found, pop up the extension

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

var notifId = '';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(' I hear youuuu');
    chrome.notifications.create(getNotificationId(), {
      type: "image",
      iconUrl: 'droplet48.png',
      title: 'You can help!',
      message: 'You can make a difference in the world with your donation.',
      buttons: [
        {
          title: 'Donate blood'
        },
        {
          title: 'Donate $$$'
        }
      ],
      imageUrl: 'droplet128.png',
      requireInteraction: true
    }, function(id) {
      console.log(id);
      notifId = id;
    });
  });

function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
}

chrome.notifications.onButtonClicked.addListener(function(notifId, 0) {

})

chrome.notifications.onButtonClicked.addListener(function(notifId, 1) {

})