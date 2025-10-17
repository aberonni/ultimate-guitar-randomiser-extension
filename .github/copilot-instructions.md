# Copilot Instructions for Ultimate Guitar Randomiser Extension

This repository contains a Chrome extension that adds a "Random Tab" button to the Ultimate Guitar "My tabs" page.

## Repository Structure

- `src/` - Main extension source code
  - `manifest.json` - Chrome extension manifest (v3)
  - `content.js` - Content script that runs on Ultimate Guitar pages
  - `background.js` - Service worker for extension actions
  - `content.css` - Styles for the random tab button
  - `icons/` - Extension icons in various sizes

## Development Guidelines

### Chrome Extension Specifics
- This is a Manifest V3 Chrome extension
- Uses service workers instead of background pages
- Content scripts are injected only on `https://*.ultimate-guitar.com/user/mytabs`
- Extension requires "tabs" permission for tab management

### Code Patterns
- Use vanilla JavaScript (no frameworks)
- Follow existing function naming conventions (camelCase)
- Event listeners are added in IIFE for content scripts
- Chrome API calls should use async/await pattern as shown in background.js
- Use `chrome.tabs.query()` for tab management
- Message passing between content and background scripts uses `chrome.runtime.sendMessage`

### Key Functionality
- Random tab selection from Ultimate Guitar tab links
- Keyboard shortcuts (Cmd/Win + Ctrl + R)
- Extension icon click handler
- Middle-click support on the random button
- Proper error handling for when user is not logged in

### Coding Standards
- Use descriptive variable names
- Add event listeners with proper cleanup considerations
- Handle edge cases (tab loading states, missing elements)
- Use `querySelector`/`querySelectorAll` for DOM manipulation
- Maintain compatibility with Ultimate Guitar's DOM structure

### Testing Approach
- Manual testing on Ultimate Guitar website required
- Test keyboard shortcuts across different browsers
- Verify extension icon functionality
- Test with and without user login states
- No automated test infrastructure exists

### Making Changes
- Keep changes minimal and focused
- Test on actual Ultimate Guitar pages when possible
- Maintain Chrome extension store compatibility
- Version bumps should follow semantic versioning in manifest.json
- Consider Ultimate Guitar's dynamic content when modifying selectors

### Common Patterns in Codebase
- DOM element creation: `document.createElement()` with explicit attributes
- Event handling: Direct event listener attachment
- Chrome API usage: Modern async/await pattern
- Error handling: Console errors with descriptive messages
- Random selection: `Math.floor(Math.random() * array.length)`

## File Purposes

- **manifest.json**: Defines extension metadata, permissions, and content script injection rules
- **content.js**: Implements the random tab functionality and UI button creation
- **background.js**: Handles extension icon clicks and tab management
- **content.css**: Styles the injected "RANDOM TAB" button (fixed position, Ultimate Guitar color scheme)

## Ultimate Guitar Integration Notes

- Extension only works on the "My tabs" page: `https://*.ultimate-guitar.com/user/mytabs`
- Selects from tab links matching: `a[href*="https://tabs.ultimate-guitar.com/tab/"]`
- User must be logged in to Ultimate Guitar for the extension to work
- Button uses Ultimate Guitar's color scheme (#ffc600 yellow on dark background)
- Button is positioned fixed at bottom-left with high z-index to overlay site content

## Security Considerations

- Only requests "tabs" permission (minimal required permissions)
- Content script runs only on Ultimate Guitar domains
- No external API calls or data collection
- Opens tabs in same origin context (Ultimate Guitar)