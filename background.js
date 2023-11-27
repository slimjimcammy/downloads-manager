chrome.downloads.onCreated.addListener(function (downloadItem) {
    // Send a message to the popup when a new download is detected
    // chrome.runtime.sendMessage({
    //     action: "newDownload",
    //     downloadItem: downloadItem,
    // });
    console.log("downloading lol");
});
