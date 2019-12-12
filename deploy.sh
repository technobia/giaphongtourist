#!/usr/bin/env bash

# build
echo "> remove old build version"
rm -rf build/ docs/
echo "> running build"
yarn build
echo "> copy CNAME file"
cp CNAME build/
echo "> rename build folder to docs"
mv build/ docs/

# deploy
echo "> deploying..."
git add . &&
git commit -m 'deploy' &&
git push
