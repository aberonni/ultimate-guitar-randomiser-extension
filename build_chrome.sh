#!/bin/bash

# Build script for Chrome version of Ultimate Guitar Randomiser Extension

echo "Building Chrome version of Ultimate Guitar Randomiser Extension..."

# Create Chrome build directory
mkdir -p build/chrome

# Copy all necessary files
cp -r src/* build/chrome/

# Create zip file for Chrome extension
cd build/chrome
zip -r ../ultimate-guitar-randomiser-chrome.zip *
cd ../..

echo "Chrome extension built successfully!"
echo "Chrome package: build/ultimate-guitar-randomiser-chrome.zip"
echo ""
echo "To install in Chrome:"
echo "1. Open Chrome and go to chrome://extensions/"
echo "2. Enable 'Developer mode'"
echo "3. Click 'Load unpacked'"
echo "4. Select the build/chrome/ directory"
echo ""
echo "For Chrome Web Store publication, upload the zip file."