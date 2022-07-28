chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) { console.log("Hello world") }
  });