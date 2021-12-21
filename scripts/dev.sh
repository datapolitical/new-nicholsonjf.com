#!/bin/sh

rm -rf _site
mkdir _site
postcss assets/css/main.css -o dist/assets/css/main.css
npx @11ty/eleventy --serve