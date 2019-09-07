window.onload = function () {
    if (document.querySelector("table.js-file-line-container") != null) {
        const message = {
            "url": window.location.href,
            "message": "Hello Vikrant",
            "yaml": document.querySelector("table").innerText.trim().replace(/\n\t/g, '\n')
        };
        alert("Hello World Redoc Inline!!")

        console.log("Inside content.js message is ", message)
        chrome.runtime.sendMessage(message)
    }
}

