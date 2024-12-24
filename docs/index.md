# Copy Base64

## Overview

This extension copies Base64 to the clipboard by right-clicking on an image present on the page

## Notice

This extension is still under development and may not work as expected.  
If this is the case, please contact us through the website listed in the developer's profile

## Supported Browsers

- Chrome
- Edge
- Firefox

## How to use

Install the required packages

```bash
yarn install
```

Build the extension.

```bash
yarn build
```

The following process is different for each browser, so please refer to the section for your browser

### Chrome

1. clone this repository
2. Open Chrome and go to `chrome://extensions/`.
3. enable developer mode
4. click `Load unpacked`.
5. select the directory where you cloned this repository.

### Edge

1. clone this repository.
2. open Chrome and go to `edge://extensions/`.
3. enable developer mode.
4. click `expand and load`.
5. select the directory where you cloned this repository.

### Firefox

1. clone this repository
2. open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. click `load temporary add-ons`
4. select `dist/firefox.zip` in the directory where you cloned this repository
5. go to `about:addons` and open the extension management.
