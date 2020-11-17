chrome.runtime.onMessage.addListener(notify);

function notify(message) {
        console.log(message);

    chrome.notifications.create({
        "type": "basic",
        "iconUrl": message.iconUrl,
        "title": message.user,
        "message": message.message
    });
};

