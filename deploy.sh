#!/usr/bin/env sh

# TO USE THIS SCRIPT
# This is intended for deploying Vue/React apps to Github Pages
# Put this file at the project root
# Open terminal at project root
# run this command: ./deploy.sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# uncomment depending on what is the name of the build directory

# Vue is usually dist
 cd dist

# React is usually build
# cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# for example
git push -f git@github.com:thinkful-ei-rabbit/amanda-bookmark.git master:gh-pages

 cd -