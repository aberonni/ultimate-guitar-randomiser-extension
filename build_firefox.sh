#!/bin/bash

# Build script for Firefox version of Ultimate Guitar Randomiser Extension

echo "Building Firefox version of Ultimate Guitar Randomiser Extension..."

# Create Firefox build directory
mkdir -p build/firefox

# Copy all necessary files
cp -r src/* build/firefox/

# Replace manifest.json with Firefox-specific manifest
cp src/manifest_firefox.json build/firefox/manifest.json

# Create zip file for Firefox extension
cd build/firefox
zip -r ../ultimate-guitar-randomiser-firefox.zip *
cd ../..

echo "Firefox extension built successfully!"
echo "Firefox package: build/ultimate-guitar-randomiser-firefox.zip"
echo ""
echo "To install in Firefox:"
echo "1. Open Firefox and go to about:debugging"
echo "2. Click 'This Firefox'"
echo "3. Click 'Load Temporary Add-on'"
echo "4. Select the manifest.json file from build/firefox/"
echo ""
echo "For permanent installation, the extension needs to be signed by Mozilla."