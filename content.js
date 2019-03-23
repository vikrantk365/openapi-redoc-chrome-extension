// alert("Hello World Redoc Inline!!")

chrome.runtime.sendMessage({
    "url": window.location.href,
    "message": "Hello Vikrant"
})