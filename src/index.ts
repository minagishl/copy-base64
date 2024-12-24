import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: 'copy-base64',
      title: 'Copy Base64',
      contexts: ['image'],
    });
});

browser.contextMenus.onClicked.addListener((info) => {
  try {
    if (info.menuItemId === 'copy-base64' && info.srcUrl) {
      fetch(info.srcUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
              if (tabs[0].id) {
                browser.tabs.sendMessage(tabs[0].id, { type: 'copy', text: base64 });
              }
            });
          };
          reader.readAsDataURL(blob);
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
});
