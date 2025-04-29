#!/bin/bash

# build and do a sym link
echo "Building code and linking..."
npm run build

# remove old link
echo "Removing old link..."
npm unlink zuki

# create new link
echo "Creating new link..."
npm link
