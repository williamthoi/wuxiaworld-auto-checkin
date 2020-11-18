var element = document.createElement('script');
// @ts-ignore
element.src = chrome.runtime.getURL('dist/src/auto-checkin.js');
document.body.appendChild(element);
