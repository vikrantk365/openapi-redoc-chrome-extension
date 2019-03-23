window.data = {}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        window.data["request"] = request
    }
)

chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.tabs.create({
            "url": "api-docs/dist/chrome-redoc/index.html"
        })
    }
)   