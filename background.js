function makeCopyable() {
    alert("Making copyable...");
    chrome.tabs.executeScript({
        file: 'cssreplace.js'
    });
};

//Runs on extension icon click
chrome.browserAction.onClicked.addListener(function(tab) {
    makeCopyable();
});

//Runs on contect menu click
chrome.contextMenus.onClicked.addListener(makeCopyable);

//Adds item to context menu
chrome.contextMenus.create({
    id: 'mathxl',
    title: 'Math XL Copy',
    contexts: ['page'],
});