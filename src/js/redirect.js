window.stop();
window.location.href = chrome.extension.getURL("nope.html?url=" + window.location.href);