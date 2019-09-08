window.data = {}

const SPEC_DETAILS = "specDetails"

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        window.data[SPEC_DETAILS] = request
    }
)

chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.storage.local.set(
            { "specDetails": window.data[SPEC_DETAILS] },
            function () {
                chrome.tabs.create({
                    "url": "index.html"
                })
            });
    }
)   