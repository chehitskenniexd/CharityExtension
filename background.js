
var notifId = '';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
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
      myNotifId = id;
    });
  });

function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
}

chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
  if (notifId === myNotifId) {
    if (btnIdx === 0) {
      chrome.tabs.create({url: 'http://www.redcrossblood.org/donating-blood'});
    } else {
      chrome.tabs.create({url: 'https://www.redcross.org/donate/donation'});
    }
    chrome.notifications.clear(notifId);
  }
});

