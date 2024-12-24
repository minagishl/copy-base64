import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener((message) => {
  if (message.type === 'copy' && message.text) {
    navigator.clipboard.writeText(message.text).then(() => {
      console.log('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }
});
