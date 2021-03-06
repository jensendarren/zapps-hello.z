/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
    var target = e.target;
    while ((target.tagName != "A" || !target.href) && target.parentNode) {
        target = target.parentNode;
    }
    if (target.tagName != "A")
        return;

    console.log("content script sending message (target.href)", target.href);
    browser.runtime.sendMessage({"url": target.href}).then(console.log)
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);