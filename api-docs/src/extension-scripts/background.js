window.data = {}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        window.data["request"] = request
    }
)

chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.storage.local.set({ "specDetails": window.data["request"] }, function () {
            console.log('Value is set to ' + window.data["request"]);
        });
        chrome.tabs.create({
            "url": "index.html"
        })
    }
)   