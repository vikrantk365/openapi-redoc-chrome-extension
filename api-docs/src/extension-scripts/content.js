window.onload = captureSpecDetails
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "visible") {
        captureSpecDetails()
    }
});

function captureSpecDetails() {
    let githubFileElement = document.querySelector("table.js-file-line-container")
    if (githubFileElement != null) {
        const message = {
            "url": window.location.href,
            "message": "Hello",
            "yaml": githubFileElement.innerText.trim().replace(/\n\t/g, '\n')
        };
        console.log("Inside content.js message is ", message)
        chrome.runtime.sendMessage(message)
    }
}