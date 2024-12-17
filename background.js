let isExtensionActive = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "startAutoAnswer") {
        startAutoAnswer();
        sendResponse({ status: "started" });
    } else if (request.action === "stopAutoAnswer") {
        stopAutoAnswer();
        sendResponse({ status: "stopped" });
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "start-auto-answer") {
        startAutoAnswer();
    } else if (command === "stop-auto-answer") {
        stopAutoAnswer();
    }
});

function startAutoAnswer() {
    isExtensionActive = true;
    console.log("Auto Answer Started");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (isExtensionActive) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            });
        }
    });
}

function stopAutoAnswer() {
    isExtensionActive = false;
    console.log("Auto Answer Stopped");
}