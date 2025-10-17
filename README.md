# Ultimate Guitar Randomiser

Adds a "Random tab" button to the ["My tabs" page](https://www.ultimate-guitar.com/user/mytabs) on [Ultimate-Guitar.com](https://www.ultimate-guitar.com).

You can open a random tab in one of three ways:

- Click on the newly added "Random tab" button
- Use the keyboard shortcut: ⌘ + CTRL + R OR ⊞ + CTRL + R
- Click on the extension icon

Note: you must be signed in to Ultimate-Guitar.com for the extension to work correctly.

![](Screenshot.png)

## Installation

### Chrome
[Add to Chrome](https://chrome.google.com/webstore/detail/ultimate-guitar-randomise/hakjookdamicmkhpnjamffoifnfkkldj?hl=en)

**Or install from source:**
1. Download or clone this repository
2. Run the build script: `./build_chrome.sh`
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked" and select the `build/chrome/` directory

### Firefox
1. Download or clone this repository
2. Run the build script: `./build_firefox.sh`
3. Open Firefox and navigate to `about:debugging`
4. Click "This Firefox"
5. Click "Load Temporary Add-on"
6. Select the `manifest.json` file from the `build/firefox/` directory

Note: For permanent installation in Firefox, the extension would need to be signed by Mozilla and published to Firefox Add-ons.

## Building

This repository includes build scripts for both browsers:
- `./build_chrome.sh` - Creates Chrome-compatible package
- `./build_firefox.sh` - Creates Firefox-compatible package
