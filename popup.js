document.getElementById('start').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "startAutoAnswer" }, (response) => {
        console.log('Start message sent:', response);
    });
    document.getElementById('status').textContent = "Status: Active";
});

document.getElementById('stop').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "stopAutoAnswer" }, (response) => {
        console.log('Stop message sent:', response);
    });
    document.getElementById('status').textContent = "Status: Inactive";
}); 