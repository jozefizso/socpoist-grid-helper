'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({serialNo: '012345678'}, function() {
    console.log("Set the default serial number.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'esluzby.socpoist.sk'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});
